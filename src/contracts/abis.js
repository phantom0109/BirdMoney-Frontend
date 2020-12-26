import erc20Abi from "./abis/erc20.json";
import ownableAbi from "./abis/ownable.json";
import birdERC20 from "./abis/bird-erc20.json";
import birdKovan from "./abis/bird-kovan.json";

const abis = {
  erc20: erc20Abi,
  ownable: ownableAbi,
  bird: birdKovan,
};

export default abis;
