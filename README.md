# Node-feature_flag

Build and Push the Docker Image to Azure Container Registry (ACR)
Next, we need to build the Docker image and push it to Azure Container Registry (ACR):

Production Image (feature flag disabled):
docker build -t <your-acr-name>.azurecr.io/my-container-app:v1 .
docker push <your-acr-name>.azurecr.io/my-container-app:v1

Staging image (feature flag enabled):
docker build -t <your-acr-name>.azurecr.io/my-container-app:v2 .
docker push <your-acr-name>.azurecr.io/my-container-app:v2
![image](https://github.com/user-attachments/assets/62572776-3e83-4b42-8da6-0331267c215f)
