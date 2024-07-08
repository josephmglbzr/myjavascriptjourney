const textInput = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    const reverseStr = cleanStr.split('').reverse().join('');

    if(cleanStr === reverseStr){
        return result.textContent = `${str} is Palindrome`;
    }else{
        return result.textContent = `${str} is not Palindrome`;

    }
}

button.addEventListener("click", () => {
    const str = textInput.value;
    if(str === ""){
        alert("Please input a value");
    }else{
        isPalindrome(str);  

    }
})
