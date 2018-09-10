section .data	; data section contains all initialized variables
	hello_msg DW 'Hello world!',0x0a,'Type something: '	; 0x0a is hex code for newline
	msg_len equ $-hello_msg	; length of hello_msg string

section .bss	; bss section contains all uninitialized variables
	input: resb 16	; 16 bytes are reserved for variable input

section .text	; text section contains all code instructions
	global _start

_start:
; Write hello_msg to the screen
	mov ecx, hello_msg	; message to print
	mov edx, msg_len	; length of the message (including null byte)
	mov ebx, 1	; file descriptor (standard out)
	mov eax, 4	; 'write' system call
	int 0x80	; kernel call, the computer uses the information in the registers to actually print the message

; Read from the user
	mov ecx, input	; input receives the text entered by the user (as a string)
	mov edx, 16	; how many characters will be written in input
	mov ebx, 2	; standard in
	mov eax, 3	; 'read' system call
	int 0x80	; kernel call

	push 0x00203a64	; null byte + ' :d'	(null byte is used to tell the computer to stop reading)
	push 0x65707974	; 'epyt'
	push 0x20756f59	; ' uoY'
	mov ecx, esp	; esp is the stack pointer : ecx now points to the beginning of the string in the stack
	mov edx, 12	; length of the string to print
	mov ebx, 1	; standard out
	mov eax, 4	; 'write' system call
	int 0x80	; kernel call

	mov ecx, input	; message to print
	mov edx, 16	; length of the message
	mov ebx, 1	; standard out
	mov eax, 4	; 'write' system call
	int 0x80	; kernel call

	mov eax, 0x1	; 'quit' system call
	int 0x80	; kernel call

; Notes:
; The 'mov' instruction is used as 'mov destination, source' : it copies the source into the destination.
; The 'push' instruction pushes its argument on the stack (a big space of memory that, in particular, contains all sections of our program).
; The order of the bytes is inverted because the stack grows downwards.
; A stack overflow is when the attacker is able to overwrite (through an input for example) parts of the stack that he shouldn't have access to,
; or when the attacker is able to redirect the execution flow of the program (through the return address for example).
