from setuptools import setup, find_packages

setup(
    name='test2',  # This should be unique on PyPI
    version='0.1.0',
    author='liorthr',
    author_email='liortahar116@gmail.com',
    description='A simple demo Python package',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url='https://github.com/yourusername/demo_package',  # Optionally provide the URL to your package's code repository
    packages=find_packages(),
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
    password = 'AgEIcHlwaS5vcmcCJDFmZDg5NjQyLWZjMGYtNDExZC05NmFkLTVkNzAyODVhYjA4OAACKlszLCI0NWNhMDg2Yy04OTcxLTQ0YjYtYTU0My00MDgwYzgwMmZiYTAiXQAABiD0NCSaS0I5JkUWtxX1QcyigSwkGipf4Kj8YItI7rqXJQ'
)