/*
 * File:   main.c
 * Author: Stefan Costea
 *
 * Created on 12 de febrero de 2022, 02:03 PM
 */

// CONFIG
#pragma config FOSC = XT        // Oscillator Selection bits (XT oscillator)
#pragma config WDTE = OFF       // Watchdog Timer Enable bit (WDT disabled)
#pragma config PWRTE = ON       // Power-up Timer Enable bit (PWRT enabled)
#pragma config BOREN = OFF      // Brown-out Reset Enable bit (BOR disabled)
#pragma config LVP = OFF        // Low-Voltage (Single-Supply) In-Circuit Serial Programming Enable bit (RB3 is digital I/O, HV on MCLR must be used for programming)
#pragma config CPD = OFF        // Data EEPROM Memory Code Protection bit (Data EEPROM code protection off)
#pragma config WRT = OFF        // Flash Program Memory Write Enable bits (Write protection off; all program memory may be written to by EECON control)
#pragma config CP = OFF         // Flash Program Memory Code Protection bit (Code protection off)


#define _XTAL_FREQ 4000000
#include <xc.h>
#include <stdint.h>
#include <stdio.h>

uint16_t ADC_read(uint8_t canal) // Funcion que se encarga de leer el ADC
{
    ADCON0bits.ADCS = canal;                  //Selecciona el canal de entrada analogica
    __delay_us(25);                             //Tiempo de adquisicion TACQ, el minimo es 19,72uS
    ADCON0bits.GO = 1;                          //Inicia el ADC
    while(ADCON0bits.GO_DONE);                  //GO se pone a 0 de forma automatica cuando la conversion termina
    return ((uint16_t)((ADRESH<<8)+ADRESL));    //Devuelve el valor del ADC
}
uint8_t SPI_read(uint8_t dato) // Funcion que se encarga de leer/escribir el SPi
{
    uint8_t res;
    SSPBUF = dato; // escribe el dato en el registro buffer
    while(SSPSTATbits.BF == 0); //Hasta que el buffer no este lleno nada
    res = SSPBUF; //guarda en res el buffer
    return res;
}
void ADC_init(void) // Funcion que se encarga de la configuracion inicial del ADC
{
    ADCON1bits.ADFM = 1;        // Posiciona los MSB a la derecha
    ADCON1bits.PCFG = 0b0100;   // Configuracion que establece el pin AN0 como analogico
    
    ADCON1bits.ADCS2 = 0;       // Seleciona la operacion 8 TOSC para superal el TAD-->
    ADCON0bits.ADCS1 = 0;       // -->minimo de 1.6uS
    ADCON0bits.ADCS0 = 1;  
    
    ADCON0bits.ADON = 1;        //Enciende el ADC
}
void SPI_init(void) // Funcion que se encarga de la configuracion inicial del SPI
{
    PORTAbits.RA5 = 1; // Desactiva el esclavo
    TRISC = 0b01000000; // Configura todos los puertos C a entrada y el RC4(SCK) a salida
    SSPCONbits.SSPEN = 0; // DESACTIVA MSSP
    SSPSTAT = 0b01000000; // bit 7 muestreo en la mitad del dato bit 6 activo por flanco de bajada
    SSPCON = 0b00010001; // bit 0-3:Fosc/16 = 250kHz bit4:idle status high
    SSPCONbits.SSPEN = 1; // ACTIVA MSSP
}
void main(void) {
    ADC_init();
    SPI_init();
    uint16_t lectura;
    uint8_t array[10]; 
    while(1)
    {   
        PORTAbits.RA5 = 0; // Activa el esclavo
        lectura = ADC_read(0b000); //Lee el canal 000 que corresponde al AN0
        sprintf(array, "%d", lectura);
        __delay_ms(100);
    }
    return;
}