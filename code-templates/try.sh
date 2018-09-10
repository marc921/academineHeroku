nasm -f elf32 $1.asm -o $1.o
ld $1.o -o $1 -m elf_i386
echo -e "OBJDUMP:"
objdump -M intel -d $1
echo -e "\nOPCODE:"
bash get_opcode.sh $1
echo -e "\nNOW RUNNING:"
./$1
echo -e "\n"
