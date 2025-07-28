## ChefAI
ChefAI is an intelligent cooking API that lets you input any combination of ingredients, and uses advanced AI to generate creative, delicious recipes tailored to what you have on hand. Perfect for discovering new meals and reducing food waste by making the most of your ingredients.

## Who to use it?
#1. Go to OpenAI api-keys
https://platform.openai.com/api-keys
  **1.1 Go to API keys and Create new scret key**
    ![Simple Design](docs/step1.png)

  **1.2 Name the new API key and give all permisions**
    ![Simple Design](docs/step2.png)

  **1.3 Copy the key and paste it in the .env**
    ![Simple Design](docs/step3.png)

#2. Go to MongoDB
https://cloud.mongodb.com/
  **2.1 Go to cluster and create a new one**
    ![Simple Design](docs/step4.png)

  **2.2 Config the cluster like the photo and follow the steps below**
    ![Simple Design](docs/step5.png)

  **2.3 Copy the connection string to the .env**
    ![Simple Design](docs/step6.png)
  
#3. Add your OpenAI and MongoDB credentials
Inside .env, paste your keys like this:
  ![Simple Design](docs/ApiKey.png)
⚠️ Do not use quotes around the values, just plain text.

Example:
OPENAI_API_KEY=sk-abc123xyz456-your-real-key
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/dbname?retryWrites=true&w=majority
