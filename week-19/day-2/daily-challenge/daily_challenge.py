user_word = input('Write a word:  ')
word_length = len(user_word)

if(word_length < 10 ):
    print('String not long enough')
elif(word_length > 10):
    print('String too long')
else:
    print('Perfect string')
    print(f'The first carachter is -{user_word[0]}- and the last is -{user_word[-1]}-')
    for i in range(1, word_length):
        print(user_word[:i])

