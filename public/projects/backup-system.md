# backup-system

While reading one of my textbooks on information security, I started to feel insecure about the reliability of my own data storage devices. 

Over the course of the next couple of days, I came up with this solution to my problem: a system which would automatically back-up my important files, but also back-up the hashes of the files, to ensure that the files are completely in-tact at any given point in time.

The hash calculator is written in **C++** using the **CryptoPP** library, and the program that moves/backs-up the files is written using regular **linux shellscript**, for portability across most **Linux** devices.
