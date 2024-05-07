class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
    def __str__(self):
        return f"{self.amount} {self.currency}"
    def __int__(self):
        return self.amount

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

# print(str(c3))
# print(int(c1))
# print(c1.amount + 5)
# print(c1.amount + c2.amount)
