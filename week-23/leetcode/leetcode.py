class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        word1_new = [char for char in word1]
        word2_new = [char for char in word2]
        new_list = []
        i = 0
        while i < min(len(word1_new), len(word2_new)):
            new_list.append(word1_new[i])
            new_list.append(word2_new[i])
            i += 1
        new_list.extend(word1_new[i:])
        new_list.extend(word2_new[i:])
        return ''.join(new_list)  


test = Solution()
print(test.mergeAlternately(word1= 'abc', word2 = 'pqroh'))