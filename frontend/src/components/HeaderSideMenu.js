import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faRightFromBracket, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBasketShopping, faUser, faRightFromBracket, faRightToBracket)

// header 회원정보 버튼들 컴포넌트
export default function HeaderSideMenu({logstate}) {
    console.log(logstate);
    const userId = 0;
  return (
    <ul>
        {
            logstate.map((value,idx) => (
                <li key={idx}>
                    <Link to={value.path} title={value.title}>
                        <FontAwesomeIcon icon={`fa-solid ${value.icon}`} />
                    </Link>
                </li>
            ))
        }
    </ul>
  )
}
