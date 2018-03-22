0000000000400566 <main>:
  400566:	55                   	push   %rbp
  400567:	48 89 e5             	mov    %rsp,%rbp
  40056a:	48 83 ec 20          	sub    $0x20,%rsp
  40056e:	89 7d ec             	mov    %edi,-0x14(%rbp)
  400571:	48 89 75 e0          	mov    %rsi,-0x20(%rbp)
  400575:	bf 78 06 40 00       	mov    $0x400678,%edi
  40057a:	e8 b1 fe ff ff       	callq  400430 <puts@plt>
  40057f:	8b 45 ec             	mov    -0x14(%rbp),%eax
  400582:	89 c6                	mov    %eax,%esi
  400584:	bf 88 06 40 00       	mov    $0x400688,%edi
  400589:	b8 00 00 00 00       	mov    $0x0,%eax
  40058e:	e8 ad fe ff ff       	callq  400440 <printf@plt>
  400593:	c7 45 fc 00 00 00 00 	movl   $0x0,-0x4(%rbp)
  40059a:	c7 45 fc 00 00 00 00 	movl   $0x0,-0x4(%rbp)
  4005a1:	eb 2f                	jmp    4005d2 <main+0x6c>
  4005a3:	8b 45 fc             	mov    -0x4(%rbp),%eax
  4005a6:	48 98                	cltq   
  4005a8:	48 8d 14 c5 00 00 00 	lea    0x0(,%rax,8),%rdx
  4005af:	00 
  4005b0:	48 8b 45 e0          	mov    -0x20(%rbp),%rax
  4005b4:	48 01 d0             	add    %rdx,%rax
  4005b7:	48 8b 10             	mov    (%rax),%rdx
  4005ba:	8b 45 fc             	mov    -0x4(%rbp),%eax
  4005bd:	89 c6                	mov    %eax,%esi
  4005bf:	bf b3 06 40 00       	mov    $0x4006b3,%edi
  4005c4:	b8 00 00 00 00       	mov    $0x0,%eax
  4005c9:	e8 72 fe ff ff       	callq  400440 <printf@plt>
  4005ce:	83 45 fc 01          	addl   $0x1,-0x4(%rbp)
  4005d2:	8b 45 fc             	mov    -0x4(%rbp),%eax
  4005d5:	3b 45 ec             	cmp    -0x14(%rbp),%eax
  4005d8:	7c c9                	jl     4005a3 <main+0x3d>
  4005da:	b8 00 00 00 00       	mov    $0x0,%eax
  4005df:	c9                   	leaveq 
  4005e0:	c3                   	retq   
  4005e1:	66 2e 0f 1f 84 00 00 	nopw   %cs:0x0(%rax,%rax,1)
  4005e8:	00 00 00 
  4005eb:	0f 1f 44 00 00       	nopl   0x0(%rax,%rax,1)
