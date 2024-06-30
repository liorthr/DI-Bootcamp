# class Email:
#     def __init__(self, content):
#         self.content = content
#         self.is_sent = False
#         self.number_of_mails_sent = 0
#     def send_to(self, email):
#         if self.is_sent == False:
#             self.number_of_mails_sent+=1
#             self.is_sent = True
#             print(f'mails count : {self.number_of_mails_sent}')
#             return "E-mail envoyé"
#         else:
#             self.is_sent = False
#             self.number_of_mails_sent-=1
#             print(f'mails count : {self.number_of_mails_sent}')
#             self.is_sent = True
#             return "L'e-mail a déjà été envoyé"


# email = Email(content="La nouvelle formation est disponible !")
# response_01 = email.send_to(email="JohnSmith@gmail.com")
# response_02 = email.send_to(email="JohnSmith@gmail.com")
# print(response_01)
# print(response_02)
# print(email.number_of_mails_sent)

class Email:
    number_of_mails_sent = 0
    def __init__(self, content):
        self.content = content
        self.is_sent = False
    def send_to(self, email):
        if self.is_sent == False:
           Email.number_of_mails_sent+=1
           self.is_sent = True
           return "E-mail envoyé"
        else:
            self.is_sent = False
            self.is_sent = True
            return "L'e-mail a déjà été envoyé"

email = Email(content="La nouvelle formation est disponible !")
response_01 = email.send_to(email="JohnSmith@gmail.com")
response_02 = email.send_to(email="JohnSmith@gmail.com")