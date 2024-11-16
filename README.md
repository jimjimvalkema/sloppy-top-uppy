# eth-bangkok-2024

## Foundry

### Deploy FhenixIntegerDivisionLibrary to Fhenix with Foundry Blockscout Verification
```
forge create src/library/FhenixIntegerDivisionLibrary.sol:FhenixIntegerDivisionLibrary \
--private-key $devTestnetPrivateKey \
--rpc-url https://api.nitrogen.fhenix.zone \
--verify \
--verifier blockscout \
--verifier-url https://explorer.nitrogen.fhenix.zone/api/
```
### Verify Blockscout Contract Already Deployed
```
forge verify-contract \
--rpc-url https://api.nitrogen.fhenix.zone \
<contract_address> \
src/library/FhenixIntegerDivisionLibrary.sol:FhenixIntegerDivisionLibrary \
--verifier blockscout \
--verifier-url https://explorer.nitrogen.fhenix.zone/api/
```

### Fhenix Nitro Testnet Contract Verified On Blockscout

https://explorer.nitrogen.fhenix.zone/address/0x50684c64F4b80b5687d0891c9339De8fFE281A33?tab=contract

## Frontend

Run locally for testing with:

⚠️ Node.js version v16.14.2 is recommended to avoid errors running the website locally. ⚠️
```shell
npm install http-server
```
then
```shell
npx http-server
```
or
```shell
http-server
```
Note: this website example uses Vanilla Javascript.
