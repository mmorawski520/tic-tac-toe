<?php
function detectWinner($boardJson,&$winner){
    if($boardJson!=null) {
    for($i=0;$i<8;$i+=3){
        if(($boardJson[$i]!=null)&&($boardJson[$i]==$boardJson[$i+1])&&($boardJson[$i+1]==$boardJson[$i+2])){
            $winner=$boardJson[$i];
        }
    }
    for($i=0;$i<3;$i++){
        if(($boardJson[$i]!=null)&&($boardJson[$i]==$boardJson[$i+3])&&($boardJson[$i+3]==$boardJson[$i+6])){
            $winner=$boardJson[$i];
        }
    }
    if((($boardJson[0]!=null)&&($boardJson[0]==$boardJson[4])&&($boardJson[4]==$boardJson[8]))||(($boardJson[2]!=null)&&($boardJson[2]==$boardJson[4])&&($boardJson[4]==$boardJson[6]))){
        $winner=$boardJson[4];
            }
        }
    }