# Health Costs Regression Model (Deep Neural Network)

## Project Overview
This project predicts individual medical expenses based on factors like age, BMI, and smoking status. This challenge was completed as part of the freeCodeCamp Machine Learning with Python Certification.

* **Final Result:** Achieved a Mean Absolute Error (MAE) of **$3053.89**, which is well below the required threshold of $3500.

---

## Technical Methodology

* **Algorithm:** Used a Deep Neural Network (DNN) built with the Keras Sequential API.
* **Data Preparation:** Implemented **One-Hot Encoding** (using `pandas.get_dummies`) to convert categorical features (like 'sex', 'smoker', 'region') into numerical format.
* **Feature Scaling:** Applied **Min-Max Scaling** (Normalization) to input features to ensure the neural network converged quickly and reliably.
* **Loss Function:** The model was compiled using the **Mean Absolute Error (MAE)** loss function to directly minimize the error metric required for the challenge.

---

## 🔗 Live Code & Execution

Click the link below to view the executable Google Colab notebook.

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1KMDM-cdqZym4Ed79KHYmNJtUNqig972I?usp=sharing)
