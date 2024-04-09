
const charToAnsi = {
  "\e[0;30m": "BLK",
  "\e[0;31m": "RED",
  "\e[0;32m": "GRN",
  "\e[0;33m": "YEL",
  "\e[0;34m": "BLU",
  "\e[0;35m": "MAG",
  "\e[0;36m": "CYN",
  "\e[0;37m": "WHT",
  "\e[1;30m": "BBLK",
  "\e[1;31m": "BRED",
  "\e[1;32m": "BGRN",
  "\e[1;33m": "BYEL",
  "\e[1;34m": "BBLU",
  "\e[1;35m": "BMAG",
  "\e[1;36m": "BCYN",
  "\e[1;37m": "BWHT",
  "\e[1m": "BOLD",
  "\e[4;30m": "UBLK",
  "\e[4;31m": "URED",
  "\e[4;32m": "UGRN",
  "\e[4;33m": "UYEL",
  "\e[4;34m": "UBLU",
  "\e[4;35m": "UMAG",
  "\e[4;36m": "UCYN",
  "\e[4;37m": "UWHT",
  "\e[40m": "BLKB",
  "\e[41m": "REDB",
  "\e[42m": "GRNB",
  "\e[43m": "YELB",
  "\e[44m": "BLUB",
  "\e[45m": "MAGB",
  "\e[46m": "CYNB",
  "\e[47m": "WHTB",
  "\e[0;100m": "BLKHB",
  "\e[0;101m": "REDHB",
  "\e[0;102m": "GRNHB",
  "\e[0;103m": "YELHB",
  "\e[0;104m": "BLUHB",
  "\e[0;105m": "MAGHB",
  "\e[0;106m": "CYNHB",
  "\e[0;107m": "WHTHB",
  "\e[0;90m": "HBLK",
  "\e[0;91m": "HRED",
  "\e[0;92m": "HGRN",
  "\e[0;93m": "HYEL",
  "\e[0;94m": "HBLU",
  "\e[0;95m": "HMAG",
  "\e[0;96m": "HCYN",
  "\e[0;97m": "HWHT",
  "\e[1;90m": "BHBLK",
  "\e[1;91m": "BHRED",
  "\e[1;92m": "BHGRN",
  "\e[1;93m": "BHYEL",
  "\e[1;94m": "BHBLU",
  "\e[1;95m": "BHMAG",
  "\e[1;96m": "BHCYN",
  "\e[1;97m": "BHWHT",
  // "\033[5m": "BLINK",
  // "\e[0m": "reset",
  // "\e[0m": "CRESET",
  // "\e[0m": "COLOR_RESET",
  // "\033[0m": "BLINK_RESET",
};


function beautify() {
  const stderr = document.getElementsByClassName("stderr") 

  function beautifyStderr(element){
    // Add Color to an html element
    element.style = "border: .2rem solid red; border-radius: .4rem";

    newHTML = element.textContent;

    newHTML = newHTML.replace(/\u001b\[0m/g, '</span>' );
    newHTML = newHTML.replace(/\u001b\[32m/g,'<span style="color: green;">');  
    newHTML = newHTML.replace(/\u001b\[31m/g,'<span style="color: red;">');

    element.innerHTML = newHTML;
    return element;
  }

  for (let i = 0 ; i < stderr.length ; ++i)
    beautifyStderr(stderr[i]);
}

beautify();

