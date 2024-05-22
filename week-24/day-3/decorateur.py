class Player:
    def __init__(self, name):
        self.name = name
    
    @property
    def get_name(self):
        return self.name
    
    @property.setter
    def set_name(self, name):
        if len(self.name) <= 26:
            self.name = name
        else:
            print("25 cractere smax")
    
    @property.deleter
    def del_name(self):
        self.name = ''

    @classmethod
    def one_method():
        pass

    @staticmethod
    def another_method():
        pass

    # name = property(get_name, set_name)
    # one_method = staticmethod(one_method)
    # another_method = classmethod(another_method)       