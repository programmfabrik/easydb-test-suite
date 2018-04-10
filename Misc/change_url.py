import os


def main():
    sourceFile = raw_input("Use source file (y/n) :")

    if (sourceFile == "y"):
        use_sourcefile()
    else :
        user_cl()

def user_cl():
    searchText = raw_input("replace what ? :").split(",")
    replaceText =  raw_input("replace it with ? :").split(",")
    skipdir = raw_input("What directories shall i skip ? (CSV) :  " ).split(",")
    replace(searchText, replaceText, skipdir)

def use_sourcefile():
    searchText = [raw_input("replace what ? :")]
    source =  raw_input("whats the name of the source file? ? :")
    with open(os.path.join(os.getcwd() ,source), 'r') as tarfile :
                    replaceText = [tarfile.read()]
    
    skipdir = raw_input("What directories shall i skip ? (CSV) :  " ).split(",")
    replace(searchText, replaceText, skipdir)


def replace(searchText, replaceText, skipdir):
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
