[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=16474995)
# Python v JavaScript: Dawn of JStice

For this assignment, your task is to convert the following Python code to JavaScript:

```python
import random
import string

def generate_password(length=12):
    characters = string.ascii_letters + string.digits + string.punctuation
    
    # Select `length` random characters from the character set above
    password = ''.join(random.choice(characters) for _ in range(length))
    
    return password
```

To accomplish this, follow these steps:

1. Identify the Python-specific functions and modules used (e.g., `random`, `string`).
2. Find JavaScript equivalents for these functions and modules.
3. Fill out the `generatePassword()` function in the `generate_password.js` file.
4. Test your JavaScript function to ensure it generates passwords correctly by loading the `index.html` page in the [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension.
5. If you are feeling adventurous, you may also test your JavaScript function using [Jest](https://jestjs.io/).

## Acceptance Criteria

Your new function must observe the following acceptance criteria:

- It **MUST** accept a `length` parameter, with a default value of `12`
- It **MUST** be called `generatePassword()` and be in the `generate_password.js` file
- It **MUST** return a random string made up of uppercase letters, lowercase letters, numbers, and/or underscores
- It **MUST** pass the GitHub Classroom tests (which are run using `Jest`)