#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
	printf("Hello, World!\n");
	printf("%d arguments were passed by command line.\n", argc);
	int i = 0;
    	for (i = 0; i < argc; i++) {
        	printf("argv[%d] = %s\n", i, argv[i]);
    	}
	return 0;
}
