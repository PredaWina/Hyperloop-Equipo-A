
#include<stdio.h>
#include<16f873.h>

int main (void)
 { 
   // Write your code here
   while (1){
        output_high(PIN_B1);
        delay_ms(500);
        output_low(PIN_B1);
        delay_ms(500);
   }
   return 0;
 }
