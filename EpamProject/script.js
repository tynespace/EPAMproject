const select = document.getElementById('select');
const artistImage=document.getElementById('artist-img');

select.addEventListener('change', function(){
    // if(this.value === 'MARINA'){
    //     artistImage.src="image/MARINA.png";
    // }

    switch(true){
        case this.value === 'coldplay':artistImage.src="image/Coldplay.png"
        break;
        case this.value === 'MARINA':artistImage.src="image/MARINA.png"
        break;
        case this.value === 'mitski':artistImage.src="image/mitski.png"
        break;
        case this.value === 'kalush':artistImage.src="image/kalush.png"
        break;
    }
});