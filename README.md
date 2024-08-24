# Fuzzer.js
## Description
Fuzzer.js is a web fuzzing tool developed in Node.js, designed to perform injection testing and vulnerability detection in web applications. This tool automates the process of testing various inputs on specific URLs using a custom dictionary.

## Features
* -l \<URL>: Specifies the target URL where fuzzing will be performed. The URL should contain a keyword that will be replaced by entries from the dictionary.
* -v: Enables verbose mode to display detailed information during the fuzzing process.
* -d \<path>: Defines the path to the dictionary file containing the keywords to be used for fuzzing.
* -k \<keyword>: Specifies the keyword that will be replaced in the URL by each entry from the dictionary.
* -s \<character>: Sets the character used to split the entries in the dictionary.
* -o \<path>: Defines the path to the file where the fuzzing results will be saved.

## Requirements
* Node.js 14.0.0 or higher.
* NPM 6.0.0 or higher.

## Installation
Clone the repository:
~~~ bash
git clone https://github.com/username/fuzzer.js.git
~~~

Navigate to the project directory:
~~~ bash
cd fuzzer.js
~~~ 

Install the required dependencies:
~~~ bash
npm install
~~~

## Usage
To run Fuzzer.js, use the following command:
~~~
node fuzzer.js -l <URL> -d <dictionary> -k <keyword> -o <output file> [-v] [-s <split character>]
~~~

## Example
~~~ bash
node fuzzer.js -l "http://example.com/search?q=FUZZ" -d "./dictionary.txt" -k "FUZZ" -s "," -o "./results.txt" -v
~~~

## In this example:

* Fuzzing is performed on the URL http://example.com/search?q=FUZZ.
* The dictionary located at ./dictionary.txt is used.
* The keyword FUZZ in the URL is replaced by each entry from the dictionary.
* The dictionary entries are split using a comma , as the separator.
* The fuzzing results are saved to ./results.txt.
* Verbose mode is enabled to provide detailed output during execution.

## Contributions
Contributions are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (git checkout -b feature/new-feature).
3. Make your changes and commit them (git commit -m 'Added new feature').
4. Submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.