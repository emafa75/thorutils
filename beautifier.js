const charToAnsi = {
  "\\u001b\\[30m": "BLK",
  "\\u001b\\[31m": "RED",
  "\\u001b\\[32m": "GRN",
  "\\u001b\\[33m": "YEL",
  "\\u001b\\[34m": "BLU",
  "\\u001b\\[35m": "MAG",
  "\\u001b\\[36m": "CYN",
  "\\u001b\\[37m": "WHT",
  // "\\u001b\\[30m": "BBLK",
  // "\\u001b\\[31m": "BRED",
  // "\\u001b\\[32m": "BGRN",
  // "\\u001b\\[33m": "BYEL",
  // "\\u001b\\[34m": "BBLU",
  // "\\u001b\\[35m": "BMAG",
  // "\\u001b\\[36m": "BCYN",
  // "\\u001b\\[37m": "BWHT",
  // "\\u001b\\[1m": "BOLD",
  // "\\u001b\\[30m": "UBLK",
  // "\\u001b\\[31m": "URED",
  // "\\u001b\\[32m": "UGRN",
  // "\\u001b\\[33m": "UYEL",
  // "\\u001b\\[34m": "UBLU",
  // "\\u001b\\[35m": "UMAG",
  // "\\u001b\\[36m": "UCYN",
  // "\\u001b\\[37m": "UWHT",
  // "\\u001b\\[40m": "BLKB",
  // "\\u001b\\[41m": "REDB",
  // "\\u001b\\[42m": "GRNB",
  // "\\u001b\\[43m": "YELB",
  // "\\u001b\\[44m": "BLUB",
  // "\\u001b\\[45m": "MAGB",
  // "\\u001b\\[46m": "CYNB",
  // "\\u001b\\[47m": "WHTB",
  // "\\u001b\\[100m": "BLKHB",
  // "\\u001b\\[101m": "REDHB",
  // "\\u001b\\[102m": "GRNHB",
  // "\\u001b\\[103m": "YELHB",
  // "\\u001b\\[104m": "BLUHB",
  // "\\u001b\\[105m": "MAGHB",
  // "\\u001b\\[106m": "CYNHB",
  // "\\u001b\\[107m": "WHTHB",
  // "\\u001b\\[90m": "HBLK",
  // "\\u001b\\[91m": "HRED",
  // "\\u001b\\[92m": "HGRN",
  // "\\u001b\\[93m": "HYEL",
  // "\\u001b\\[94m": "HBLU",
  // "\\u001b\\[95m": "HMAG",
  // "\\u001b\\[96m": "HCYN",
  // "\\u001b\\[97m": "HWHT",
  // "\\u001b\\[90m": "BHBLK",
  // "\\u001b\\[91m": "BHRED",
  // "\\u001b\\[92m": "BHGRN",
  // "\\u001b\\[93m": "BHYEL",
  // "\\u001b\\[94m": "BHBLU",
  // "\\u001b\\[95m": "BHMAG",
  // "\\u001b\\[96m": "BHCYN",
  // "\\u001b\\[97m": "BHWHT",
  // "\\033\\[5m": "BLINK",
  // "\\u001b\\[0m": "reset",
  // "\\u001b\\[0m": "CRESET",
  // "\\u001b\\[0m": "COLOR_RESET",
  // "\\033\\[0m": "BLINK_RESET",
};


function beautify() {
  console.log('beautify')
  const stderr = document.querySelectorAll(".stderr");
  // const refreshButton = document.querySelector('.btn-group.pull-right');

  function beautifyStderr(element){
    // Add Color to an html element
    element.style = "border: .2rem solid red; border-radius: .4rem; color: #000;";

    newHTML = element.textContent;

    newHTML = newHTML.replace(/\u001b\[0m/g, '</span>' );

    for (const key in charToAnsi) {
      const keyreg = new RegExp(key, 'g');
      newHTML = newHTML.replace(keyreg, `<span class="ansi_${charToAnsi[key]}">`);
    }

    element.innerHTML = newHTML;
    return element;
  }

  for (let i = 0 ; i < stderr.length ; ++i)
    beautifyStderr(stderr[i]);
}

beautify();
