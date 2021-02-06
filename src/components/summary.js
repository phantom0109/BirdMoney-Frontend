import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import Divider from "@material-ui/core/Divider";
import GaugeRate from "./shared/rating";
import Assets from "./shared/assets";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { Button, Header } from "./../components";
import { BigNumber } from "bignumber.js";

import Web3 from "web3";
import { addresses, abis } from "../contracts";
import { scaleLinear } from "d3-scale";
import TreeMap from "./shared/treemap";

import {
  yellow,
  green,
  deepOrange,
  deepPurple,
} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "none",
    backgroundColor: "transparent",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  rating: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
  margin: {
    marginTop: theme.spacing(1),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  green: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
  },
  yellow: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
  },
  center: {
    textAlign: "center",
  },
}));


const DATE_OPTIONS = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

function UpdateButton({ provider, loadWeb3Modal }) {
  return (
    <Button
      onClick={() => {
        console.log("Request Asset Update")
      }}
    >
      {!provider ? "Request Asset Update" : "Update Assets"}
    </Button>
  );
}

var bird_requests = 0;

const scoreScale = scaleLinear().domain([0, 100]).range([0, 10]);

const Summary = (props) => {

  const user_account = props.account;
  const web3Obj = props.web3Obj;

  const classes = useStyles();

  // console.log(props.bird)

  // const balance = props.balance;
  // const balance = +props.bird.eth_balance;

  // const transCount = props.data.length;
  const transCount = +props.bird.nbr_transaction_count;

  // const start = new Date(+props.data[0].timeStamp * 1000);
  // const end = new Date(+props.data[transCount - 1].timeStamp * 1000);

  // const credit_age = Math.round(Math.abs(+start - +end) / 8.64e7);
  const credit_age = +props.bird.nbr_account_age_days;

  // const rating = (transCount + credit_age + Math.floor(balance) * 10) / 100;

  // const bird_rating = scoreScale(rating);
  const [bird_rating, setBirdRating] = useState(+props.bird.bird_rating);
  
  const parseRating = (value) => {
    let rating = BigNumber(value);
    let oneEther = new BigNumber(1);
    rating = rating.dividedBy(oneEther.shiftedBy(18)).toNumber();
    console.log(rating);
    setBirdRating(rating);
  }

  // make on-chain request function to Oracle
  const OnChainButton = (provider, loadWeb3Modal) => {
    return (
      <Button
        onClick={() => {
        
          //const web3 = new Web3("wss://kovan.infura.io/ws/v3/2377373e9cc84228a6cea33645b511ea");
          const web3 = web3Obj;
          if (!web3)
            return;
          const abi = abis.bird;
          const address = addresses.kovan;
          const contract = new web3.eth.Contract(abi, address);
          
          bird_requests++;
          console.log(bird_requests + "th request...");
          if (bird_requests == 1) {
            contract.events.UpdatedRequest((err, res) => {
              if (err === null) {
                console.log("received", res);
                parseRating(res.returnValues.value);
              } else {
                console.error(err);
              }
            });
  
            let urlToQuery = 'https://api.birdprotocol.com/analytics/address/' + user_account;
            let attributeToFetch = 'bird_rating';
            
            console.log("Client", "creating a new request...");
            console.log("Client", attributeToFetch, urlToQuery);
  
            contract.methods.newChainRequest(urlToQuery, attributeToFetch).send({
              from: user_account,
              gas: 600000
            }, (err, res) => {
              if (err === null) {
                console.log(res);
              } else {
                console.error(err);
              }
            });
          }
          else {
            contract.methods.getRatingByAddressString(user_account).call({
              from: user_account,
              gas: 600000
            }, (err, res) => {
              if (err === null) {
                console.log("received", res);
                parseRating(res);
              } else {
                console.error(err);
              }
            });
          }
        }}
      >
        {!provider ? "Request Onchain Rating" : "Update Onchain Rating"}
      </Button>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography component="h1" variant="h5">
                  Bird Rating
                </Typography>
                <GaugeRate score={bird_rating}></GaugeRate>
              </Grid>

              <Grid item xs={4}>

                <Box position="relative" display="inline-flex">
                  <CircularProgress
                    variant="determinate"
                    value={transCount < 1 ? 5 : 10 || transCount > 50 ? 75 : 25}
                  />
                  <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="caption"
                      component="div"
                      color="textSecondary"
                    >
                      {transCount < 1 ? "C" : "C" || transCount > 50 ? "A" : "B"}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="subtitle1">Payment History</Typography>
                
              </Grid>

              <Grid item xs={4}>

                                
              <Box position="relative" display="inline-flex">
                  <CircularProgress
                    variant="determinate"
                    value={ credit_age < 1 ? 5 : 10 || credit_age > 500 ? 75 : 35}
                  />
                  <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="caption"
                      component="div"
                      color="textSecondary"
                    >
                      {credit_age < 1 ? "C" : "C" || credit_age > 500 ? "A" : "B"}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="subtitle1">Debt History</Typography>

              </Grid>
              
              <Grid item xs={4}>

                                
              <Box position="relative" display="inline-flex">
                  <CircularProgress
                    variant="determinate"
                    value={credit_age < 1 ? 5 : 10 || credit_age > 500 ? 75 : 25}
                  />
                  <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="caption"
                      component="div"
                      color="textSecondary"
                    >
                      {credit_age < 1 ? "C" : "C" || credit_age > 500 ? "A" : "B"}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="subtitle1">Credit Age</Typography>

              </Grid>
              
              <Grid container item xs={12} justify="center" alignItems="center">
                <OnChainButton></OnChainButton>
              </Grid>

            </Grid>
          
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>

          <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography component="h1" variant="h5">
                  Assets
                </Typography>
                <Typography component="h6" >
                * test asset data, to be updated in mainnet
                </Typography>

                <Assets></Assets>
              </Grid>

              <Grid container item xs={12} justify="center" alignItems="center">
                <UpdateButton></UpdateButton>
              </Grid>

            </Grid>

          
          </Paper>
        </Grid>
      
      </Grid>
    </div>
  );
};

export default Summary;
