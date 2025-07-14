Title: How to get started with Python for Nods.js developers?

Python is a great language for beginners. It is easy to learn and has a lot of libraries that can help you get started with web development, AI, data science, and more. If you are a Node.js developer and want to learn Python, this post is for you. In this post, we will show you how to get started with Python if you are a Node.js developer. One thing as NodeJS developer who is already familar with Package Manager like npm or yarn and also depenceis management, you will find Python's package manager pip very similar to npm or yarn.
But what I struggled with Python is setting up Virtual Environment and activating virtual environment. Because with NodeJS you don't have to worry about setting up Virtual Environment. But with Python it is a good practice to use a virtual environment when working with Python. A virtual environment is an isolated environment that allows you to install packages and dependencies without affecting the global Python installation. In this post, we will show you how to set up a virtual environment in Python and get started with Python programming. With NodeJS when we do `npm install` it installs all the dependencies in `node_modules` folder. But with Python, you have to create a `requirements.txt` file and list all the dependencies in that file. Then you can install all the dependencies using the following command: `pip install -r requirements.txt`.

Due to it variety of ways to setup Virtual Environment, I struggled to find the best way to setup Virtual Environment. But after trying out different ways, I found the best way to setup Virtual Environment is using default venv module. The venv module is included with Python and is easy to use. In this post, we will show you how to set up a virtual environment using the venv module and get started with Python programming.

## Comparison between NodeJS and Python

| NodeJS        | Python                          | Description                              |
| ------------- | ------------------------------- | ---------------------------------------- |
| npm           | pip                             | package manager                          |
| package.json  | requirements.txt                | list of dependencies                     |
| node_modules  | venv                            | virtual environment/ dependencies folder |
| npm install   | pip install -r requirements.txt | install dependencies                     |
| npm start     | python app.py                   | run the application                      |
| npm test      | python -m unittest              | run tests                                |
| npm run build | python setup.py sdist           | build the application                    |
| npm publish   | twine upload dist/\*            | publish the application                  |
| npmjs.com     | pypi.org                        | registry                                 |

## Python Package Managers

1. pip
2. conda
3.

## Install Python

The first step is to install Python on your machine. You can download the latest version of Python from the official website. Once you have downloaded the installer, run it and follow the instructions to install Python on your machine.

After installing Python, you can check if it is installed correctly by opening a terminal and running the following command:

```bash
brew install python
```

This command will install Python on your machine using Homebrew. If you do not have Homebrew installed, you can install it by running the following command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once you have installed Python, you can check if it is installed correctly by running the following command:

```bash
python --version
```

You should see the version of Python that you have installed printed to the console. If you see an error message, it means that Python is not installed correctly.

## Multiple ways to Setup Virtual Environment

There are multiple ways to create a virtual environment in Python. You can use the venv module, the virtualenv package, or the conda package manager. We recommend using the venv module, as it is included with Python and is easy to use.

1. venv
2. conda
3. pipenv
4. virtualenv

## Setup Virtual Environment using venv

It is a good practice to use a virtual environment when working with Python. A virtual environment is an isolated environment that allows you to install packages and dependencies without affecting the global Python installation.

1. To create a virtual environment, open a terminal and run the following command:

```bash
python -m venv venv
```

This command will create a virtual environment in a directory called venv.

2. To activate the virtual environment, run the following command:

```bash
source venv/bin/activate
```

You should see the name of the virtual environment printed to the console. This means that the virtual environment is activated.

3. You can now install packages and dependencies in the virtual environment without affecting the global Python installation.

Install all the dependencies using the following command:

```bash
pip install -r requirements.txt
```

4. To deactivate the virtual environment, run the following command:

```bash
deactivate
```

This will deactivate the virtual environment and return you to the global Python installation.

## Setup a Virtual Environment using conda

Conda is a package manager that is commonly used in the data science community. It allows you to create virtual environments, install packages, and manage dependencies.

1. To create a virtual environment using conda, run the following command:

```bash
conda create --name myenv
```

This command will create a virtual environment called myenv.

2. To activate the virtual environment, run the following command:

```bash
conda activate myenv
```

3. Install all the dependencies using the following command:

```bash
conda install -r requirements.txt
```

You should see the name of the virtual environment printed to the console. This means that the virtual environment is activated. You can now install packages and dependencies in the virtual environment without affecting the global Python installation.

4. To deactivate the virtual environment, run the following command:

```bash
conda deactivate
```

## Write your first Python program

1. Create a new file hello.py and write the following code:

```python
print("Hello, World!")
```

2. Save the file and run it using the following command:

```bash
python hello.py
```

You should see the message "Hello, World!" printed to the console. Congratulations! You have written your first Python program.

## Learn the basics of Python

Now that you have written your first Python program, it is time to learn the basics of Python. There are many online resources that can help you learn Python, such as the official Python documentation, online tutorials, and books.

We recommend starting with the official Python documentation. It is a comprehensive guide to the Python language and covers everything from basic syntax to advanced topics. You can find the official Python documentation [here](https://docs.python.org/3/).

## Conclusion

In this post, we have shown you how to get started with Python if you are a Node.js developer. We have covered the basics of installing Python, setting up a code editor, writing your first Python program, and learning the basics of Python. We hope this post has been helpful to you and wish you the best of luck on your Python journey!
