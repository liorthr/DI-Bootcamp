emojis = "🥳😎🥳🥳😍🥳😍🚀"
emojis_count = {}

for emoji in [*emojis]:
    count = [*emojis].count(emoji)
    emojis_count[emoji] = count
print(emojis_count)






# for index, emoji in enumerate(emojis_list):
#     # print(f'Index: {index} --> Emoji: {emoji}')
#     emojis_count[emoji] = 
