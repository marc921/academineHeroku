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
                <label><code>main()</code> désassemblée:</label>
                <Highlight lang={"c"}
                  value={
                    "0000000000400566 main:\n"+"  400566: 55                    push   %rbp\n"+"  400567: 48 89 e5              mov    %rsp,%rbp\n"+"  40056a: 48 83 ec 20           sub    $0x20,%rsp\n"+"  40056e: 89 7d ec              mov    %edi,-0x14(%rbp)\n"+"  400571: 48 89 75 e0           mov    %rsi,-0x20(%rbp)\n"+"  400575: bf 78 06 40 00        mov    $0x400678,%edi\n"+"  40057a: e8 b1 fe ff ff        callq  400430 <puts@plt>\n"+"  40057f: 8b 45 ec              mov    -0x14(%rbp),%eax\n"+"  400582: 89 c6                 mov    %eax,%esi\n"+"  400584: bf 88 06 40 00        mov    $0x400688,%edi\n"+"  400589: b8 00 00 00 00        mov    $0x0,%eax\n"+"  40058e: e8 ad fe ff ff        callq  400440 <printf@plt>\n"+"  400593: c7 45 fc 00 00 00 00  movl   $0x0,-0x4(%rbp)\n"+"  40059a: c7 45 fc 00 00 00 00  movl   $0x0,-0x4(%rbp)\n"+"  4005a1: eb 2f                 jmp    4005d2 <main+0x6c>\n"+"  4005a3: 8b 45 fc              mov    -0x4(%rbp),%eax\n"+"  4005a6: 48 98                 cltq   \n"+"  4005a8: 48 8d 14 c5 00 00 00  lea    0x0(,%rax,8),%rdx\n"+"  4005af:  00 \n"+"  4005b0: 48 8b 45 e0           mov    -0x20(%rbp),%rax\n"+"  4005b4: 48 01 d0              add    %rdx,%rax\n"+"  4005b7: 48 8b 10              mov    (%rax),%rdx\n"+"  4005ba: 8b 45 fc              mov    -0x4(%rbp),%eax\n"+"  4005bd: 89 c6                 mov    %eax,%esi\n"+"  4005bf: bf b3 06 40 00        mov    $0x4006b3,%edi\n"+"  4005c4: b8 00 00 00 00        mov    $0x0,%eax\n"+"  4005c9: e8 72 fe ff ff        callq  400440 <printf@plt>\n"+"  4005ce: 83 45 fc 01           addl   $0x1,-0x4(%rbp)\n"+"  4005d2: 8b 45 fc              mov    -0x4(%rbp),%eax\n"+"  4005d5: 3b 45 ec              cmp    -0x14(%rbp),%eax\n"+"  4005d8: 7c c9                 jl     4005a3 <main+0x3d>\n"+"  4005da: b8 00 00 00 00        mov    $0x0,%eax\n"+"  4005df: c9                    leaveq \n"+"  4005e0: c3                    retq   \n"+"  4005e1: 66 2e 0f 1f 84 00 00  nopw   %cs:0x0(%rax,%rax,1)\n"+"  4005e8: 00 00 00 \n"+"  4005eb: 0f 1f 44 00 00        nopl   0x0(%rax,%rax,1)"              }
                />
                <div className='zbrunSpeaking'>
                  J'utilise GNU Assembler, qui utilise la syntaxe AT&T donc <code>mov source, destination</code> et non l'inverse.<br/>
                  - 15brun
                </div>
              </div>}
          </div>
        </div>
      </div>
    );
  }
}


