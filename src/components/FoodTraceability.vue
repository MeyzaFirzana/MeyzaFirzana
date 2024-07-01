<template>
  <div class="container">
    <h1 class="animated-title">Welcome to Food Traceability</h1>
    <div class="header">
      <h3>Hello! Welcome to Our Page</h3>
    </div>
    <div class="feature">
      <img src="@/assets/logotest.png" alt="Secure and Transparent">
      <h3>Secure and Transparent</h3>
      <p>Utilize blockchain to provide an immutable and transparent record of your food products. Each transaction is recorded in a decentralized manner, ensuring that the data cannot be altered or tampered with.</p>
    </div>
   <div class="form-group"> 
      <input v-model="newFoodId" placeholder="Food ID">
      <input v-model="newFoodDetails" placeholder="Food Details">
      <input v-model="expirationDate" type="date" placeholder="Expiration Date">
      <button @click="addFoodItem">Add Food Item</button>
    </div>

    <div class="form-group">
      <h2>Retrieve Food Item</h2>
      <input v-model="retrievalId" placeholder="Food ID">
      <button @click="getFoodItem">Get Food Item</button>
      <div v-if="retrievedFood">
        <h3>Retrieved Food Item</h3>
        <p>ID: {{ retrievedFood.id }}</p>
        <p>Details: {{ retrievedFood.details }}</p>
        <p>Import Time: {{ formatDate(retrievedFood.importTime) }}</p>
        <p>Export Time: {{ formatDate(retrievedFood.exportTime) }}</p>
        <p>Expiration Time: {{ formatDate(retrievedFood.expirationTime) }}</p>
        <button @click="exportFoodItem">Mark as Exported</button>
        <div id="barcode"></div>
      </div>
    </div>

    <div class="form-group">
      <h2>All Food Items</h2>
      <button @click="loadAllFoodItems">Load All Food Items</button>
      <ul>
        <li v-for="item in foodItems" :key="item.id">{{ item.id }}: {{ item.details }}</li>
      </ul>
    </div>

    <div class="form-group">
      <h2>Scan Barcode</h2>
      <button @click="startBarcodeScanner">Start Barcode Scanner</button>
      <div id="scanner-container"></div>
    </div>

    <div class="form-group">
      <h2>Grant Roles</h2>
      <input v-model="roleAddress" placeholder="Ethereum Address">
      <select v-model="roleType">
        <option value="FARMER_ROLE">Farmer</option>
        <option value="DISTRIBUTOR_ROLE">Distributor</option>
        <option value="PRODUCER_ROLE">Producer</option>
        <option value="PROCESSOR_ROLE">Processor</option>
        <option value="ADMIN_ROLE">Administrator</option>
        <option value="LOGISTIC_ROLE">Logistic Provider</option>
        <option value="RETAILER_ROLE">Retailer</option>
        <option value="CONSUMER_ROLE">Consumer</option>
      </select>
      <button @click="grantRole">Grant Role</button>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3';
import FoodTraceability from '../../build/contracts/FoodTraceability.json';
import JsBarcode from 'jsbarcode';
import Quagga from 'quagga';

export default {
  data() {
    return {
      web3: null,
      contract: null,
      accounts: null,
      newFoodId: '',
      newFoodDetails: '',
      expirationDate: '',
      retrievalId: '',
      retrievedFood: null,
      foodItems: [],
      roleAddress: '',
      roleType: 'FARMER_ROLE',
      ws: null // Add 
    };
  },
  async mounted() {
    try {
      this.web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      this.accounts = await this.web3.eth.getAccounts();
      const networkId = await this.web3.eth.net.getId();
      const deployedNetwork = FoodTraceability.networks[networkId];
      this.contract = new this.web3.eth.Contract(
        FoodTraceability.abi,
        deployedNetwork && deployedNetwork.address,
      );
      //console.log("Contract initialized:", this.contract);

       // Initialize WebSocket connection
       this.ws = new WebSocket('ws://localhost:8096');
      this.ws.onopen = () => {
        console.log('WebSocket connection established');
      };
      this.ws.onmessage = (event) => {
        console.log('WebSocket message received:', event.data);
        // Handle WebSocket messages as needed
      };
      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
      this.ws.onclose = () => {
        console.log('WebSocket connection closed');
      };
    } catch (error) {
      console.error("Error during contract initialization:", error);
    }
  },
    //} catch (error) {
   //   console.error("Error during contract initialization:", error);
  
  methods: {
    async addFoodItem() {
      const expirationTime = new Date(this.expirationDate).getTime() / 1000;
      console.log("Adding food item:", this.newFoodId, this.newFoodDetails, expirationTime);
      try {
        await this.contract.methods.addFoodItem(this.newFoodId, this.newFoodDetails, expirationTime).send({ from: this.accounts[0], gas: 3000000 });
        alert("Food item added successfully!");
        this.newFoodId = '';
        this.newFoodDetails = '';
        this.expirationDate = '';
        this.loadAllFoodItems(); // Reload the list of food items
      } catch (error) {
        console.error("Error adding food item:", error);
        alert("Error adding food item. Please check the console for details.");
      }
    },
    async getFoodItem() {
      try {
        console.log("Retrieving food item:", this.retrievalId);
        const foodItem = await this.contract.methods.getFoodItem(this.retrievalId).call();
        this.retrievedFood = {
          id : foodItem[0],
          details : foodItem [1],
        importTime: parseInt(foodItem[2]),
        exportTime: parseInt(foodItem[3]),
      expirationTime: parseInt (foodItem[4]) || 0
        };
      
 
       //
       //  foodItem;
     //   this.generateBarcode(foodItem.id);
    //  } catch (error) {
     //   console.error("Error retrieving food item:", error);
    //    alert("Error retrieving food item. Please check the console for details.");
    //  }
   // },
   this.generateBarcode(foodItem[0]);
  } catch (error) {
    console.error("Error retrieving food item:", error);
    alert("Error retrieving food item. Please check the console for details.");
  }
},
    async exportFoodItem() {
      try {
        console.log("Exporting food item:", this.retrievedFood.id);
        await this.contract.methods.exportFoodItem(this.retrievedFood.id).send({ from: this.accounts[0] });
        alert("Food item exported successfully!");
        this.loadAllFoodItems();
      } catch (error) {
        console.error("Error exporting food item:", error);
        alert("Error exporting food item. Please check the console for details.");
      }
    },
    async loadAllFoodItems() {
      try {
        console.log("Loading all food items");
        const itemCount = await this.contract.methods.getItemCount().call();
        const items = [];
        for (let i = 0; i < itemCount; i++) {
          const id = await this.contract.methods.foodIds(i).call();
          const item = await this.contract.methods.getFoodItem(id).call();
          items.push ({
            id: item [0],
            details :item [1],
            importTime : parseInt(item[2]),
            exportTime : parseInt(item [3]),
            expirationTime: parseInt(item[4]) 
        });
     }
        this.foodItems = items;
      } catch (error) {
        console.error("Error loading all food items:", error);
        alert("Error loading all food items. Please check the console for details.");
      }
    },
    async grantRole() {
    if (!this.web3.utils.isAddress(this.roleAddress)) {
      alert("Invalid Ethereum address. Please enter a valid address.");
      return;
    }
      try {
        console.log(`Granting role ${this.roleType} to address:`, this.roleAddress);
        await this.contract.methods.grantRole(this.web3.utils.keccak256(this.roleType), this.roleAddress).send({ from: this.accounts[0] });
        alert("Role granted successfully!");
      } catch (error) {
        console.error("Error granting role:", error);
        alert("Error granting role. Please check the console for details.");
      }
    },
    formatDate(timestamp) {
      if (!timestamp) return "Expiration time not set";
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    },
    generateBarcode(id) {
      JsBarcode("#barcode", id, {
        format: "CODE128",
        lineColor: "#0aa",
        width: 4,
        height: 40,
        displayValue: true
      });
    },
    startBarcodeScanner() {
      Quagga.init({
        inputStream: {
          type: "LiveStream",
          target: document.querySelector("#scanner-container"),
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment"
          }
        },
        decoder: {
          readers: ["code_128_reader"]
        }
      }, function (err) {
        if (err) {
          console.log(err);
          return;
        }
        Quagga.start();
      });

      Quagga.onDetected((data) => {
        this.retrievalId = data.codeResult.code;
        Quagga.stop();
      });
    }
  }
};
</script>

<style scoped>
@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

.container {
  width: 80%;
  margin: 0 auto;
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.animated-title {
  font-size: 2.5em;
  font-weight: bold;
  animation: slideInLeft 1s;
}

.feature {
  text-align: center;
  margin: 20px 0;
}

.feature img {
  width: 500px;
  height: 280px;
  margin-bottom: 10px;
}

.feature h3 {
  margin-bottom: 10px;
  font-size: 1.2em;
}

.feature p {
  margin: 0;
  font-size: 1em;
}

.form-group {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group input,
.form-group select {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 80%;
}

.form-group button {
  padding: 10px 20px;
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-group button:hover {
  background-color: #005f5f;
}

#barcode {
  margin: 20px 0;
}

#scanner-container {
  width: 100%;
  max-width: 640px;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
