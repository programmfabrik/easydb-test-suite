import os


def main():
    searchText = raw_input("replace what ? :").split(",")
    replaceText =  raw_input("replace it with ? :").split(",")
    skipdir = raw_input("What directories shall i skip ? (CSV) :  " ).split(",")


    path = os.getcwd() 
    for root, dirs, files in os.walk(path):

        if dirs in skipdir:
            continue
        
        for file in files:
            if ".js" in file:

                with open(os.path.join(root,file), 'r') as tarfile :
                    filedata = tarfile.read()
                    print file

                    # Replace the target string
                for i in range(len(searchText)):
                    filedata = filedata.replace(searchText[i], replaceText[i])
                    print searchText[i] + replaceText[i]

                    # Write the file out again
                with open(os.path.join(root,file), 'w') as tarfile:
                    tarfile.write(filedata)


if __name__ == "__main__":
   main()
