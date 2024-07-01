// SPDX-License-Identifier: MIT


pragma solidity ^0.8.19;

//import "@openzeppelin/contracts/access/AccessControl.sol";
// Assuming @openzeppelin/contracts is directly inside your contracts folder
import "@openzeppelin/contracts/access/AccessControl.sol";
contract FoodTraceability is AccessControl {
    bytes32 public constant FARMER_ROLE = keccak256("FARMER_ROLE");
    bytes32 public constant DISTRIBUTOR_ROLE = keccak256("DISTRIBUTOR_ROLE");
    bytes32 public constant PRODUCER_ROLE = keccak256("PRODUCER_ROLE");
    bytes32 public constant PROCESSOR_ROLE = keccak256("PROCESSOR_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant LOGISTIC_ROLE = keccak256("LOGISTIC_ROLE");
    bytes32 public constant RETAILER_ROLE = keccak256("RETAILER_ROLE");
    bytes32 public constant CONSUMER_ROLE = keccak256("CONSUMER_ROLE");

    struct FoodItem {
        string id;
        string details;
        uint expirationTime;
        uint importTime;
        uint exportTime;
        string productionData;
        string processingData;
    }

    mapping(string => FoodItem) public foodItems;
    string[] public foodIds;

    event FoodItemAdded(string id, string details, uint expirationTime, uint importTime);
    event FoodItemExported(string id, uint exportTime);
    event ProductionDataUpdated(string id, string productionData);
    event ProcessingDataUpdated(string id, string processingData);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(FARMER_ROLE, msg.sender);
        _grantRole(DISTRIBUTOR_ROLE, msg.sender);
        _grantRole(PRODUCER_ROLE, msg.sender);
        _grantRole(PROCESSOR_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(LOGISTIC_ROLE, msg.sender);
        _grantRole(RETAILER_ROLE, msg.sender);
        _grantRole(CONSUMER_ROLE, msg.sender);
    }

    function addFoodItem(string memory id, string memory details, uint expirationTime) public {
        require(hasRole(FARMER_ROLE, msg.sender) || hasRole(PRODUCER_ROLE, msg.sender), "Caller is not authorized to add food items");
        require(bytes(foodItems[id].id).length == 0, "Food item already exists.");
        foodItems[id] = FoodItem(id, details, expirationTime, block.timestamp, 0, "", "");
        foodIds.push(id);
        emit FoodItemAdded(id, details, expirationTime, block.timestamp);
    }

    function updateProductionData(string memory id, string memory data) public {
        require(hasRole(PRODUCER_ROLE, msg.sender), "Caller is not authorized to update production data");
        require(bytes(foodItems[id].id).length != 0, "Food item does not exist.");
        foodItems[id].productionData = data;
        emit ProductionDataUpdated(id, data);
    }

    function updateProcessingData(string memory id, string memory data) public {
        require(hasRole(PROCESSOR_ROLE, msg.sender), "Caller is not authorized to update processing data");
        require(bytes(foodItems[id].id).length != 0, "Food item does not exist.");
        foodItems[id].processingData = data;
        emit ProcessingDataUpdated(id, data);
    }

    function getFoodItem(string memory id) public view returns (FoodItem memory) {
        require(bytes(foodItems[id].id).length != 0, "Food item does not exist.");
        return foodItems[id];
    }

    function exportFoodItem(string memory id) public {
        require(bytes(foodItems[id].id).length != 0, "Food item does not exist.");
        require(hasRole(DISTRIBUTOR_ROLE, msg.sender) || hasRole(LOGISTIC_ROLE, msg.sender), "Caller is not authorized to export food items");
        foodItems[id].exportTime = block.timestamp;
        emit FoodItemExported(id, block.timestamp);
    }

    function getItemCount() public view returns (uint) {
        return foodIds.length;
    }

    // Commented out to resolve compilation error:
    // function grantRole(bytes32 role, address account) public {
    //     require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Caller is not an admin");
    //     _grantRole(role, account);
    // }
}