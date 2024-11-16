// Initialization
const provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;
let accounts = [];

// Contract and Conversion Details
const wethAddress = "0x..."; // Replace with your wETH contract address
const euroeAddress = "0x..."; // Replace with your EUROe contract address
const wethABI = [/* Add wETH ABI */];
const euroeABI = [/* Add EUROe ABI */];
const wethContract = new ethers.Contract(wethAddress, wethABI, provider);
const euroeContract = new ethers.Contract(euroeAddress, euroeABI, provider);

async function connectWallet() {
  try {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    signer = provider.getSigner();
    const walletAddress = accounts[0];
    document.getElementById("walletAddress").innerText =
      "Wallet: " + walletAddress.slice(0, 6) + "..." + walletAddress.slice(-4);
    updateBalances();
  } catch (error) {
    console.error("Failed to connect wallet:", error);
  }
}

async function updateBalances() {
  try {
    const wethBalance = await wethContract.balanceOf(accounts[0]);
    const euroeBalance = await euroeContract.balanceOf(accounts[0]);
    document.getElementById("wethBalance").innerText = ethers.utils.formatEther(wethBalance);
    document.getElementById("euroeBalance").innerText = ethers.utils.formatEther(euroeBalance);
  } catch (error) {
    console.error("Failed to fetch balances:", error);
  }
}

async function convertWethToEuroe() {
  try {
    const inputAmount = document.getElementById("wethInput").value;
    if (parseFloat(inputAmount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const wethAmount = ethers.utils.parseEther(inputAmount);
    const transaction = await wethContract.transfer(euroeAddress, wethAmount);
    document.getElementById("conversionOutput").innerText = "Transaction sent: " + transaction.hash;

    transaction.wait().then(() => {
      document.getElementById("conversionOutput").innerText = "Conversion complete!";
      updateBalances();
    });
  } catch (error) {
    console.error("Conversion failed:", error);
    document.getElementById("conversionOutput").innerText = "Conversion failed. Check console for details.";
  }
}

// Event Listener for Connect Wallet Button
document.getElementById("enableEthereumButton").addEventListener("click", connectWallet);
