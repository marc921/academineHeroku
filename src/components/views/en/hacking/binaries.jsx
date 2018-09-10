import React from "react";

import { HackingNav } from './home.jsx';

var Highlight = require('react-syntax-highlight');

export default class HackingBinaries extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCode: false
    };
  }

  toggleShowCode(){
    this.setState({showCode: !this.state.showCode});
  }

  render() {
    const toggleShowCode = this.toggleShowCode.bind(this);
    return (
      <div>
        <HackingNav />
        <div className='two-columns-page'>

          <div className='half-page half'>
            <h2>Tutoriels extérieurs</h2>
            <ul>
              <li>
                <h2>Le langage assembleur:<button className='margin-left' onClick={toggleShowCode}>Voir {this.state.showCode ? 'moins' : 'plus'}</button></h2>
                Il est possible de désassembler les exécutables pour en voir le code assembleur, très proche du langage machine. Pour trouver les failles dans un exécutable, il faut souvent avoir une certaine connaissance de ce langage.
                {this.state.showCode &&
                  <div>
                    <br/>
                    <label>Exemple de code C:</label>
                    <Highlight lang={"c"}
                      value={
                        "#include <stdio.h>\n"+"#include <stdlib.h>\n"+"\n"+"int main(int argc, char *argv[])\n"+"{\n"+"  printf(\"Hello, World!\\n\");\n"+" printf(\"%d arguments were passed by command line.\\n\", argc);\n"+" int i = 0;\n"+"     for (i = 0; i < argc; i++) {\n"+"         printf(\"argv[%d] = %s\\n\", i, argv[i]);\n"+"     }\n"+"  return 0;\n"+"}"
                      }
                    />
                  </div>}
                <ul>
                  <li><a href="http://www.cs.virginia.edu/~evans/cs216/guides/x86.html">CS Virginia: x86 Assembly</a><br/>
                      Ce lien ne vous permettra pas d'écrire vos premiers programmes en assembleur mais il vous aidera à repérer et comprendre les instructions les plus fréquentes.</li>
                  <li><a href="https://openclassrooms.com/courses/en-profondeur-avec-l-assembleur">OpenClassrooms: en profondeur avec l'assembleur</a></li>
                  <li><a href="https://www.tutorialspoint.com/assembly_programming/index.htm">Tutorials Point: Assembly</a></li>
                  <li><a href="https://hackr.io/tutorials/learn-assembly-language">Hackr.io: Learn Assembly Language</a></li>
                  <li><a href="http://www.c-jump.com/CIS77/ASM/Instructions/index.html">C-Jump: MASM and Registers</a></li>
                </ul>
              </li>
              <li>
                <h2>Buffer Overflow:</h2>
                Jouer sur un input pour modifier la prochaine instruction exécutée par la machine.
                <ul>
                  <li><a href="https://dhavalkapil.com/blogs/Buffer-Overflow-Exploit/">Dhaval Kapil: Buffer Overflow</a><br/>
                      Ajouter l'option -no-pie lors de la compilation du code C.</li>
                  <li><a href="https://www.exploit-db.com/papers/13171/">Exploit DB: Buffer Overflow Tutorial</a></li>
                  <li><a href="https://www.youtube.com/watch?v=1S0aBV-Waeo">YouTube - Computerphile: Buffer Overflow Attack</a></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className='half-page half border-left'>
            <h2>Utile:</h2>
            <ul>
              <li><code>objdump -d executable</code> affiche le code assembleur de l'exécutable.</li>
              <li><code>gcc source.c -o executable</code> compile le code source.c et crée l'exécutable executable.</li>
              <li><a href="https://en.wikibooks.org/wiki/X86_Assembly/X86_Architecture">x86 Architecture: Assembly and registers</a><br/>
                      S'y réferer pour mieux comprendre ce qui se passe lors de l'exécution du code.</li>
            </ul>
            {this.state.showCode &&
              <div>
                <label>Exemple de code assembleur (affiche 'Hello world' puis demande à l'utilisateur d'écrire quelque chose) :</label>
                <Highlight lang={"asm"}
                  value={
                    "section .data  ; data section contains all initialized variables\n  hello_msg DW 'Hello world!',0x0a,'Type something: ' ; 0x0a is hex code for newline\n  msg_len equ $-hello_msg ; length of hello_msg string\n\nsection .bss  ; bss section contains all uninitialized variables\n  input: resb 16  ; 16 bytes are reserved for variable input\n\nsection .text ; text section contains all code instructions\n  global _start\n\n_start:\n; Write hello_msg to the screen\n  mov ecx, hello_msg  ; message to print\n  mov edx, msg_len  ; length of the message (including null byte)\n  mov ebx, 1  ; file descriptor (standard out)\n  mov eax, 4  ; 'write' system call\n  int 0x80  ; kernel call, the computer uses the information in the registers to actually print the message\n\n; Read from the user\n  mov ecx, input  ; input receives the text entered by the user (as a string)\n  mov edx, 16 ; how many characters will be written in input\n  mov ebx, 2  ; standard in\n  mov eax, 3  ; 'read' system call\n  int 0x80  ; kernel call\n\n  push 0x00203a64 ; null byte + ' :d' (null byte is used to tell the computer to stop reading)\n  push 0x65707974 ; 'epyt'\n  push 0x20756f59 ; ' uoY'\n  mov ecx, esp  ; esp is the stack pointer : ecx now points to the beginning of the string in the stack\n  mov edx, 12 ; length of the string to print\n  mov ebx, 1  ; standard out\n  mov eax, 4  ; 'write' system call\n  int 0x80  ; kernel call\n\n  mov ecx, input  ; message to print\n  mov edx, 16 ; length of the message\n  mov ebx, 1  ; standard out\n  mov eax, 4  ; 'write' system call\n  int 0x80  ; kernel call\n\n  mov eax, 0x1  ; 'quit' system call\n  int 0x80  ; kernel call\n\n; Notes:\n; The 'mov' instruction is used as 'mov destination, source' : it copies the source into the destination.\n; The 'push' instruction pushes its argument on the stack (a big space of memory that, in particular, contains all sections of our program).\n; The order of the bytes is inverted because the stack grows downwards.\n; A stack overflow is when the attacker is able to overwrite (through an input for example) parts of the stack that he shouldn't have access to,\n; or when the attacker is able to redirect the execution flow of the program (through the return address for example)."              }
                />
              </div>}
          </div>
        </div>
      </div>
    );
  }
}


