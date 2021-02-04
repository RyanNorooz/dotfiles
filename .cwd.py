from os import getcwd, system

windir = r"C:\Users\Ryan\AppData\Local\Packages\KaliLinux.54290C8133FEE_ey8k8hqnwqnmg\LocalState\rootfs" + getcwd().replace('/', '\\')
print(windir)

system('pushd $(wslpath -a -w "$(pwd)")')
print("system1 finished")

system(f'cmd.exe /c "pushd \"{dir}\" && start ."')
print("system2 finished")
