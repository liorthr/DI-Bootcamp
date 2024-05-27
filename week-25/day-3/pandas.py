# import pandas as pd
# ds = pd.Series([2, 4, 6, 8, 10])
# print(ds)

# import pandas as pd
# ds = pd.Series([2, 4, 6, 8, 10])
# print("Pandas Series and type")
# print(ds)
# print(type(ds))
# print("Convert Pandas Series to Python list")
# print(ds.tolist())
# print(type(ds.tolist()))
 
# import pandas as pd
# ds1 = pd.Series([2, 4, 6, 8, 10])
# ds2 = pd.Series([1, 3, 5, 7, 9])
# ds = ds1 + ds2
# print("Add two Series:")
# print(ds)
# print("Subtract two Series:")
# ds = ds1 - ds2
# print(ds)
# print("Multiply two Series:")
# ds = ds1 * ds2
# print(ds)
# print("Divide Series1 by Series2:")
# ds = ds1 / ds2
# print(ds)

import pandas as pd
d1 = {'a': 100, 'b': 200, 'c':300, 'd':400, 'e':800}
print("Original dictionary:")
print(d1)
new_series = pd.Series(d1)
print("Converted series:")
print(new_series)


import pandas as pd
s = pd.Series([
    ['Red', 'Green', 'White'],
    ['Red', 'Black'],
    ['Yellow']])
print("Original Series of list")
print(s)
s = s.apply(pd.Series).stack().reset_index(drop=True)
print("One Series")
print(s)

