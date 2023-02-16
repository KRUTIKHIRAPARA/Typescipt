// 14. Write a program to get the one character from user and find out this character is Vowel or Not. 


var char:string = 'j'.toUpperCase();
// char.toUpperCase();

if( char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U')
{
    console.log(`${char} Is Vowel Character..`);
}
else
{
    console.log(`${char} Is Not Vowel Character..`);
}