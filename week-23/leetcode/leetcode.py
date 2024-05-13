# class Solution:
#     def mergeAlternately(self, word1: str, word2: str) -> str:
#         word1_new = [char for char in word1]
#         word2_new = [char for char in word2]
#         new_list = []
#         i = 0
#         while i < min(len(word1_new), len(word2_new)):
#             new_list.append(word1_new[i])
#             new_list.append(word2_new[i])
#             i += 1
#         new_list.extend(word1_new[i:])
#         new_list.extend(word2_new[i:])
#         return ''.join(new_list)  


# test = Solution()
# print(test.mergeAlternately(word1= 'abc', word2 = 'pqroh'))

# def reversed(string):
#     s = ''
#     for c in string:
#         s = c + s
#     print(s)

# reversed('Bonjour')

sentence_01 = 'Aujourdhui on va aller à la plage avec mes amis'

# def findBigWrod(sentence):
#     biggestword = ''
#     for word in sentence:
#         if word > biggestword:
#             biggestword = word
#     print(biggestword)

# findBigWrod(sentence_01)

def findBigWrod(sentence):
    sentence_split = sentence.split()
    max_word = max(sentence_split)
    min_word = min(sentence_split)
    print('max word: ', max_word)
    print('min word: ', min_word)
findBigWrod(sentence_01)