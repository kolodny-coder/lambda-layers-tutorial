# 🚀 Lambda Layers Tutorial with AWS SAM 🚀

## 💡 Introduction

This repository provides a hands-on example of how to implement Lambda Layers with AWS Serverless Application Model (SAM). The project focuses on creating a layer called `UUIDLayer` and a lambda function named `UUIDFunction` that uses this layer. 🎯

## 🧩 Understanding the Components

### 📝 Event File

The `event.json` file is a JSON representation of a sample event that can be used for testing purposes. It has various parameters that mimic an API Gateway Proxy request including the HTTP method, headers, path parameters, and query string parameters. This helps us simulate how our Lambda function would behave in a real-world scenario🌐(source).

### 🛠️ SAM Template

The `template.yaml` file is the heart of any AWS SAM application. It defines the resources that make up the serverless application. Let's go through it step by step:

1. **AWSTemplateFormatVersion**: It specifies the AWS CloudFormation template version that the template conforms to. 📄

2. **Transform**: It specifies the name of the macro that AWS CloudFormation uses to process your template. `AWS::Serverless-2016-10-31` indicates that this template is written in AWS SAM syntax. 🔧

3. **Description**: It provides a brief explanation about the resources that are defined in the template. 💡

4. **Globals**: Here, we are setting a global timeout for all the functions. This means that all the functions in this template will have a timeout of 3 seconds unless specifically overridden. ⏱️

5. **Resources**: This section is where we define our AWS resources: 🏗️

    - **UUIDLayer**: This is our Lambda Layer. We are specifying its type as `AWS::Serverless::LayerVersion`, giving it a name, and providing a brief description. The `ContentUri` points to the directory (`uuid-layer/`) where the layer's code resides. We also specify the runtime compatible with this layer (`nodejs18.x`).

    - **UUIDFunction**: This is our Lambda function. It's type is `AWS::Serverless::Function`. We give it a name, description, and specify the directory (`src/`) where the function's code resides. We also set the function's handler and runtime. The `Layers` field links our function with the previously defined layer using the reference `!Ref UUIDLayer`. This means our function will have access to the resources provided by `UUIDLayer`.

    - **Events**: The `UUIDApi` event is an API Gateway event. It triggers our function whenever a GET request is made to the `/uuid` path.

6. **Outputs**: This section provides details about the created resources. It includes the API Gateway endpoint URL for the function, the Lambda function's Amazon Resource Name (ARN), and the ARN of the IAM role created for the function (source).

## 🚀 Deployment Steps 🚀

Follow these steps to clone and deploy the repository:

1. **Clone the repository**: Open your terminal and run the following command:
    ```bash
    git clone https://github.com/kolodny-coder/lambda-layers-tutorial.git
    ```
2. **Navigate to the cloned repository**:
    ```bash
    cd lambda-layers-tutorial
    ```
3. **Build the SAM application**: This will build any dependencies and create a deployment package.
    ```bash
    sam build
    ```
4I apologize for the repeated cut-off. Here's the complete deployment steps:


4. **Deploy the SAM application**: This will create a CloudFormation stack and deploy your resources. It will prompt for parameters, and for the first deployment, it is recommended to use default parameters.
    ```bash
    sam deploy --guided
    ```