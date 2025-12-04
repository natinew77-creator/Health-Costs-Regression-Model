import pandas as pd
import numpy as np

# Load data
df = pd.read_csv('insurance.csv')

# Select features and target
# User wants: Age, BMI, Smoker, Children
features = ['age', 'bmi', 'children', 'smoker']
target = 'expenses'

# Preprocess
df['smoker'] = df['smoker'].map({'yes': 1, 'no': 0})

X = df[features].values
y = df[target].values

# Add bias term (column of 1s)
X_b = np.c_[np.ones((len(X), 1)), X]  # add x0 = 1 to each instance

# Calculate optimal weights using Normal Equation: theta = (X.T * X)^-1 * X.T * y
theta_best = np.linalg.inv(X_b.T.dot(X_b)).dot(X_b.T).dot(y)

intercept = theta_best[0]
coeffs = theta_best[1:]

print("Intercept (b):", intercept)
print("Coefficients (w):")
for feature, weight in zip(features, coeffs):
    print(f"{feature}: {weight}")
