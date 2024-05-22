import functools

user_name  = 'Jason'

def check(username):
    def decorator(func):
        @functools.wraps(func)
        def wrapper():
            if username == user_name:
                return func()
            else:
                print('Foreign user')
        return wrapper
    return decorator


@check(username='Jason')
def profile():
    """
    verification de l'usser admin
    """
    print('Le profil membre ...')


help(profile)
