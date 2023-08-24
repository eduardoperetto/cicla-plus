import string, random

def gen_transaction_code():
    characters = string.ascii_letters + string.digits
    random_code = ''.join(random.choice(characters) for _ in range(6))
    return random_code.upper()
