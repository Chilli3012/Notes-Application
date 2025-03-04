export const validateEmail=(email)=>{
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitails=(name)=>{
    if(!name) return "";
    const words=name[0];
    let initials="";
    for (let i=0;i<Math.min(words.length,1);i++){
        initials+=words[i][0]
    }

    return initials.toUpperCase();
};


