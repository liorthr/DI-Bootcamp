# class DogData():
#     def __init__(self, name_of_the_dog, amount_of_legs):
#         self.name = name_of_the_dog
#         self.amount_of_legs = amount_of_legs
#     def __str__(self):
#         return (f'name: {self.name} amount: {self.amount_of_legs}')
#     def names(self, other_dog):
#         print()
        

# class BankAccount():
#     def __init__(self, owner, balance ):
#         self.owner = owner
#         self.balance = balance
#         print(f'The owner is {owner} and have {balance}$')
#     def deposit(self, amount):
#         self.balance += amount 
#         print(f'You add {amount}$ new balan,ce {self.balance}')
#     def withdraw(self, amount): 
#         self.balance -= amount
#         print(f'You withdraw {amount}$')
#     def get_balance(self):
#         print(f'The finale balance is {self.balance}')

# user_01 = BankAccount('David', 1000)  
# user_01.deposit(1000)
# user_01.withdraw(500)
# user_01.get_balance()


class Book():
    def __init__(self, title, author, isbn, available):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.available = available
    def issue_books(self):
        if self.available == True:
            print(f'The book its available')
        else:
            print(f'The book is not availbale')
    def return_books(self):
        self.available = True
    def __str__(self):
        availability = 'available' if self.available else 'not available'
        return f'The title is {self.title} written by {self.author} with the ISBN {self.isbn} and the book is {availability}'

        
class Library():
    def __init__(self):
        self.list_of_books = []
    def add_book(self, book):
        self.list_of_books.append(book)
    def find_books_by_title(self, title):
        for book in self.list_of_books:
            if book.title == title:
                return book
    def find_books_by_author(self, author):
        for book in self.list_of_books:
            if book.author == author:
                return book
    def list_available_books(self):
        for book in self.list_of_books:
            if book.available == True:
                return book
    def list_all_books(self):
        return self.list_of_books

    
book1 = Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', True)
book2 = Book('To Kill a Mockingbird', 'Harper Lee', '9780446310789', False)

# print(book1)  
# print(book2) 
# book1.issue_books()  
# book2.issue_books() 

library = Library()
library.add_book(book1)
library.add_book(book2)

# print(f'Books with title "The Great Gatsby": {library.find_books_by_title('The Great Gatsby')}')
library.list_available_books()