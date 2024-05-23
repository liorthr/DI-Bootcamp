import numpy as np
import pandas as pd

df = pd.DataFrame({
    "Name": ["Alice", "Bob", "Charlie", "David", "Eve"],
    "Age": [25, 32, 22, 35, 47],
    "Score": [85, 63, 77, 96, 54]
})

# Head
# Returns the first 3 rows of the DataFrame
# print(df.head(3))  

# Tail
# Returns the last 3 rows of the DataFrame
print(df.tail(3))  

# Info
# Provides a summary of the DataFrame including the number of non-null entries in each column
# print(df.info())  

# Describe
# Provides descriptive statistics of the DataFrame
# print(df.describe())  