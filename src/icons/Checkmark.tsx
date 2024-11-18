import { type FC, type SVGAttributes } from "react";

export const Checkmark: FC<SVGAttributes<SVGElement>> = (properties) => (
  <svg
    width={108}
    height={83}
    viewBox="0 0 108 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...properties}
  >
    <path fill="url(#pattern0_93_18)" d="M0 0H108V83H0z" />
    <defs>
      <pattern
        id="pattern0_93_18"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_93_18"
          transform="matrix(.0012 0 0 .00156 -.006 0)"
        />
      </pattern>
      <image
        id="image0_93_18"
        width={846}
        height={643}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA04AAAKDCAYAAAAtoVpfAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO3d0VEkR7o24O9snHvJgxkPxJQDalkgZIGY+4wYsEBggSD+uhdYsGDBggMp2oIDHgwW7B/VVQg0ghkaqruyqp4nQrG7cfbsQqZ24O0v883/+e9//xsAAAAbU1fvI+J99x//fUTsPPNftdP93z9HxPUz/57Lv/5ZypfP/Ht6JzgBAABvU1f3gWfR/efc/+OPW1rZZRe2Lh+FrutI+XNf/wWCEwAA8DIPk6NFNx1q/vkPBa/e7V8hqglVb5hQCU4AAMA/1dX9kbr7kNT843cTWKmrbjJ1Hik/dxzwHwQnAADgPigtHv1V8iSpL3erANX+dfm1o32CEwAAzFVdNQFpN+YTlL7lrJtEnX/57xOcAABgLto7Svdh6Wf7/qxmEnUaEceR8k0ITgAAMHFt491u95ep0vqaO1F7/zu2rxoAAPiGNiztdWHpneV6k2ZK91lwAgCAKWiP4e11fwlL/dltSiMEJwAAGKu2Ca+ZKu07hrcRB/eV5e44AQDA2LRteM1k6Vd7tzEXkfLu/X+4iRMAAIyBo3jbdNet818EJwAAKJnp0hB2v3wMV3ACAIDSPNxdOjRd2rqjSPnyy/9Sd5wAAKAUD8fxmrKH7+zL1i0j5Z2n/ktNnAAAYGhtYDp0HG9Qd92U70mCEwAADKW9v9QEph/tweD2IuWb574IwQkAALZNYCrNSaR8/rWvSXACAIBtEZhKtOz25KsEJwAA2DSBqVR33RG9z9/6+gQnAADYFIGpdPuR8vVLvkZ15AAA0DeBaQwuIuVnW/S+ZOIEAAB9aWvFjyPiZ2tatNvuvawXE5wAAOCt6ur7LjB5h2kcdl9yr+kxwQkAAF6rDUz73V/fWcdROHrpvabH3HECAIDXqKu97h7TO+s3GleR8uI1X6yJEwAArEPxw1jdrY7ovZLgBAAAL+Ee09itfa/psX/NffUAAOCb6qq5w3QjNI3WSaR8+ZYv3h0nAAB4Tnssr5ky/WCNRmsZKe+89Yt3VA8AAL7UHstr7jF9sjaj9qZ7TY8JTgAA8FhdNb9on6oXn4T9SPmmj29EcAIAgFgFpvfdsbyfrccknEXKp319I8ohAACgLX+4FpomY9k9Stwb5RAAAMxXO2U69SbT5HyIlK/7/KZMnAAAmKeHKZPQNC0HfYemMHECAGB2TJmm7CJS7qVF70smTgAAzEdd7ZkyTdZtROxt6pvTqgcAwPS17zKdKn+YtL1I+fOmvkHBCQCAaaurRUSce5dp0o4i5ctNfoPuOAEAMF111bzL9MkOT9pVpLzY9Ddo4gQAwPTU1U53NO8Huztpd5u81/SYcggAAKalLYC4FJpmobnXdLONb9TECQCAaVAAMTcnkfL5tr5nd5wAABi/9mhe80v0O7s5C8tIeWeb36ijegAAjFt7NO9PoWk2tnav6TFH9QAAGKf2aF7TmverHZyV/Uj5etvfsOAEAMD4aM2bq7NI+XSI791RPQAAxqWudrXmzdLtato0EMEJAIDxqKvDiPh3RHxn12ZnN1L+PNQ37ageAADlUzU+dwdD3Gt6TB05AABlc59p7q4i5cXQa+CoHgAA5XKfae7uVkf0CiA4AQBQprrad59p9ga91/SYO04AAJSnrk69zzR7R5HyZSmL4I4TAADlaEsgHM1jGSnvlLQKjuoBAFCGtgRCaKKYe02POaoHAMDwHkKT+0zsRco3pa2CiRMAAMOqqz2hic5ZpHxe4mKYOAEAMJw2NP1hB1jda4rYL3UhBCcAAIahOY8Hd90RvSKqx5/iqB4AANsnNPF3h5Hydclroo4cAIDtUTfOP11EysW16H3JxAkAgO0Qmvin29URvREQnAAA2Dyhiaftlnyv6THBCQCAzWrfaLoRmvjCUen3mh5zxwkAgM3xsC1Pu4qUF2NaGxMnAAA2Q2jiaXerI3ojIzgBANA/oYnnFf1e03MEJwAA+iU08byTSPl8jOvjjhMAAP2pq6Za+g8ryhOWkfLOWBfGxAkAgH4ITTxvlPeaHhOcAAB4O6GJr9uPlG/GvEaCEwAAbyM08XVnkfLp2NdIcAIA4PWEJr5uuZo2TYByCAAAXqdtz/vT6vEVHyLl6ykskIkTAADre6gch+ccTCU0hYkTAABr804T33YRKY+6Re9LJk4AALyc0MS3NdXje1NbJ8EJAICXEZp4md1I+fPU1kpwAgDg2+rqe6GJFziKlCd5980dJwAAvu4hNP1gpfiKq0h5MdUFMnECAOB5QhMvM8l7TY8JTgAAfI3QxEvsRco3U14pwQkAgKfV1anQxAucRMrnU18owQkAgH9qQ9OvVoZvWEbE4RwWSXACAODv6mpPaOIF7rojepOrHn+K4AQAwIM2NP1hRXiB/Uj5ei4LpY4cAIBW+8Dtn1aDF7iIlHfntFAmTgAA3IemST5cSu9up149/hTBCQBg7tq3mpoyiO/mvhS8yO5c7jU9JjgBAMyZB25Zz8Gc7jU9JjgBAMzbsdDEC11FysdzXSzBCQBgrrzVxMvdrY7ozZjgBAAwR95qYj2zvNf0mOAEADA3dbXrrSbWcBIpz75x0TtOAABz8lA7rkGPl1hGys3fM7Nn4gQAMBd19V5oYg2zv9f0mOAEADAHbe34udDEGvYi5RsL1hKcAADm4VztOGs4i5TPLdgDwQkAYOra2vEf7TMvtIyIfYv1d4ITAMCU1dWh2nHWcNcd0Zt19fhTBCcAgKlq32r6zf6yhsNI+dqC/ZM6cgCAKaqrRUT8x96yhotIWYveM0ycAACmpn2rycV+1nG7OqLHswQnAIApUTvO67jX9A2CEwDAVLShqXng9p09ZQ1HkfKlBfs6wQkAYDpOvdXEmq4i5UOL9m2CEwDAFLRvNf1sL1lDUz2uDOKFBCcAgLGrq31vNfEK7jWtQXACABiz9q2m3+0hazqJlDUvrsE7TgAAY9XWjl9q0GNNy0h5x6Ktx8QJAGCMhCZex72mVxKcAADGpq0dPxWaeIX9SPnGwq1PcAIAGJOHt5rUjrOus0j51Kq9juAEADAux0ITr3C7mjbxaoITAMBY1NWx2nFeaVf1+NsITgAAY9DWjn+yV7zCQaR8beHeRh05AEDp6qppQfu3feIVLiJlLXo9MHECAChZWzvuQj+v0VSP71m5fghOAAClemjQUzvOa7jX1CPBCQCgREITb3MUKV9aw/4ITgAAZTpXO84rLSPlQ4vXL8EJAKA0ddXcafrRvvAKd6sjevROcAIAKEldHXqriTfYi5RvLGD/BCcAgFK0bzX9Zj94pZNI+dzibYbgBABQgrZ2/A97wSstI8K9pg0SnAAAhtaGJg1ovNZdd0RP9fgGCU4AAENqa8fP1Y7zBvuR8rUF3CzBCQBgKA9vNb2zB7zSRaR8avE2T3ACABjOqbeaeIPb1RE9tkJwAgAYQvtW08/WnjfYda9pewQnAIBta2vHvdXEWxy517Rd//Pf//53Tt8vAMCw2tCkdpy3uIqUF1Zwu0ycAAC2pa0dP7bevMHd6ogeWyc4AQBsw8NbTWrHeQv3mgYiOAEAbFpbO34qNPFGJ5Gyh5IHIjgBAGzepdpx3mgZKe9bxOEITgAAm9TWjgtNvIV7TQUQnAAANqWujtWO04O9SPnGQg5LcAIA2IS2dvyTteWNziLlc4s4PMEJAKBvdbXrrSZ6sIwI95oK4QFcAIA+qR2nPx8i5WvrWQYTJwCAvrS140ITfTgQmsoiOAEA9EFooj8XkfKx9SyL4AQA0I9zteP04HbVokdxBCcAgLdq32r60TrSg6Z6/LOFLI/gBADwFnW1760menIUKV9azDJp1QMAeK32rSa14/ThKlJeWMlymTgBALxGWzsuNNGHO/eayic4AQCs6+GtJuhDc6/pxkqWTXACAFhHWzt+rnacnpxEyucWs3zuOAEAvNTDW01qx+nDMlLesZLjYOIEAPByx0ITPXGvaWQEJwCAl2jfalI7Tl/2I+VrqzkeghMAwLe0teNCE305i5RPrea4CE4AAF/jrSb6dbuaNjE6yiEAAJ7zUDuuQY++fHBEb5xMnAAAnlJX74UmenYgNI2XiRMAwJfUjtO/q0h5YV3Hy8QJAOCfhCb61FSP71rRcROcAAAea2vHhSb6tBspf7ai4yY4AQDcq6tjteP07ChSvrSo4+eOEwBAqB1nI5aR8o6lnQYTJwCAuloITfTMvaaJEZwAgHlr32o6n/sy0Lu9SPnGsk6H4AQAzNdD7bi3mujTSaQsjE+M4AQAzJPQxGYsI+LQ2k6P4AQAzJXacfp21x3RUz0+QYITADA/7VtNP9t5enYYKV9b1GlSRw4AzEtd7UfE73adnl1Eylr0JszECQCYj/atJqGJvt2ujugxaSZOAMA8tLXjf9ptNuCDI3rTZ+IEAExfG5ou7TQbcCQ0zYOJEwAwbQ+14xr06NtVpLywqvNg4gQATJfQxOY01ePKIGZEcAIApuxYaGJDvNc0M4ITADBN7VtNv9pdNuAkUj63sPPijhMAMD1t7fgfdpYNWEbKOxZ2fkycAIBpqatdoYkNca9pxgQnAGA62trxUzvKhuxHyjcWd54c1QMApqGu3kdE857Od3aUDTiLlPcs7HyZOAEA49fWjp8LTWzIcjVtYtYEJwBgCrzVxCapHkdwAgBGrq0dF5rYlINI+drqIjgBAONVV4feamKDLiLlYwtMCE4AwGi1bzX9ZgPZkLvVET3oCE4AwPjU1cJbTWzYrntNPCY4AQDj0r7VdG7X2KCjSPnSAvOYd5wAgPFoa8ebi/rv7BobchUpLywuXzJxAgDGoQ1Nl0ITG+ReE88SnACAsVA7zqY17zXdWGWeIjgBAOVr32r62U6xQSeRsrtzPMsdJwCgbHW1HxG/2yU2aBkp71hgvsbECQAoV/tWk9DEJrnXxIsITgBAmdra8WO7w4btR8rXFplvcVQPAChPG5qaBr3v7A4bdBEp71pgXsLECQAoS1s7fio0sWG3juixDsEJACjHw1tNasfZtN1I+bNV5qUEJwCgJMdCE1tw4F4T63LHCQAoQ101oemT3WDDriLlhUVmXSZOAMDw2tpxoYlNu1sd0YNXEJwAgGHVVfOL7B92gS1wr4lXE5wAgOG0teOndoAtOIqULy00r+WOEwAwjLp6HxHXasfZgmWkvGOheQsTJwBg+9ra8XOhiS1wr4leCE4AwBDO1Y6zJXuR8o3F5q0EJwBgu+qqudP0o1VnC84i5XMLTR8EJwBge+rqMCJ+teJswTIi9i00fVEOAQBsR/tWk9pxtqG517SIlK+tNn0xcQIANq+tHRea2JZDoYm+mTgBAJvVhqZLDXpsyUWkrEWP3pk4AQCbo3ac7bpdtejBBghOAMBmtKGpmTS9s8JsSVM9/tliswmCEwCwKafeamKLjiLlSwvOprjjBAD0r32rSe0423IVKS+sNptk4gQA9KutHRea2JamelwZBBsnOAEA/fFWE9vnXhNbITgBAP1oa8ePrSZbdBIpn1twtsEdJwDg7bzVxPYtI+Ud6862mDgBAG/T1o6fCk1skXtNbJ3gBAC81aXacbZsP1K+sehsk+AEALxeWzsuNLFNZ5HyqRVn2wQnAOB16upY7ThbdruaNsEAlEMAAOtTO84wPkTK19aeIZg4AQDrqatdoYkBHAhNDMnECQB4ObXjDOMiUtaix6BMnACAl2lrx4Umtq2pHt+z6gxNcAIAvk1oYji7kfJn68/QBCcA4CXO1Y4zgKNI+dLCUwJ3nACAr2vfalI7zrZdRcoLq04pTJwAgOfV1b7QxADca6I4ghMA8LT2rabfrQ4D2IuUbyw8JXFUDwD4p7Z2/E8rwwBOIuV9C09pTJwAgL97eKsJtm0ZEYdWnRKZOAEAD9ra8euIeGdV2LLmXtMiUr628JTIxAkAaD281SQ0MYR9oYmSCU4AwL1jbzUxkItI+dTiUzLBCQDwVhNDulU9zhgITgAwd23tuNDEUHYj5c9Wn9IJTgAwZ21o+sPfAwzkyL0mxkKrHgDM1UPt+Hf+HmAAV5HywsIzFiZOADBHdfVeaGJAd6sjejAighMAzE1bO34uNDEg95oYHcEJAObnUu04AzqJlC9tAGPjjhMAzInacYa1jJR37AFjZOIEAHNRV8dCEwNyr4lRE5wAYA7a2vFP9poB7UXKNzaAsXJUDwCmrq6ayuf/2GcGdBYp79kAxszECQCmrH2r6dweM6BlROzbAMbOxAkApqqtHb9RO87APkTK1zaBsTNxAoApakOTB24Z2oHQxFQITgAwTafeamJgF5HysU1gKgQnAJia9q2mn+0rA7pdtejBhAhOADAldbXvrSYK0FSPf7YRTIngBABT0b7V9Lv9ZGBHkfKlTWBqtOoBwBS0teN/2ksGdhUpL2wCU2TiBABj14Ymn/AztLuI2LULTJXgBABj1taOn6odpwDuNTFpghMAjNXDW01qxxnaSaR8bheYMsEJAMbrWGiiAMtIed9GMHWCEwCMUftWk9pxhnbnvSbmQnACgLFpa8eFJkqwHylf2wnmQB05AIxJXTWtZf+2ZxTgLFI2bWI2TJwAYCza2vFT+0UBblfTJpgREycAGIO6eh8R12rHKcQHR/SYGxMnAChdWzt+LjRRiAOhiTkSnACgfN5qohRXkfKx3WCOBCcAKFlbOy40UYKmenzXTjBXghMAlKquDtWOU5DdSPmzDWGuBCcAKFH7VtNv9oZCHEXKlzaDOdOqBwClqatFRPzHvlCIZaS8YzOYOxMnAChJ+1bTuT2hEO41QUdwAoBSqB2nPHuR8o19AcEJAMrQhqbmDsk7O0IhTiJl00/oCE4AUAa145RkGRGHdgQeCE4AMLT2raaf7QOFuOuO6Kkeh0cEJwAYUl3te6uJwhxGytc2Bf5OHTkADKV9q+kP609BLiJlLXrwBBMnABhCWzt+bO0pyO3qiB7wJMEJALatDU2XascpzK57TfA8wQkAtqmtHT8VmijMkXtN8HXuOAHAtjy81aR2nJJcRcoLOwJfZ+IEANtzLDRRmLvVET3gmwQnANiGujpWO06B3GuCFxKcAGDT2trxT9aZwpxEypc2BV7GHScA2KS6ao5B/dsaU5hlpLxjU+DlTJwAYFPa2vFT60th3GuCVxCcAGAT6uq9t5oo1H6kfGNzYD2CEwD0ra0dPxeaKNBZpGwKCq8gOAFA/87VjlOg5WraBLyK4AQAfaqr5tP8H60pBdpTPQ6vJzgBQF/q6tBbTRTqIFK+tjnweurIAaAP7VtNf1hLCnQRKWvRgzcycQKAt2prx4UmSnS7OqIHvJngBABv0YamS2tIodxrgp4ITgDwWmrHKdtRpCzUQ0/ccQKA12hD06XacQp1FSkvbA70x8QJAF7nVGiiUHfuNUH/BCcAWFf7VtPP1o1CNfeabmwO9EtwAoB1tLXj3mqiVCeR8rndgf654wQAL+WtJsq2jJR37BFshokTALxEWzt+bK0olHtNsGGCEwB8y8NbTWrHKdV+pHxtd2BzHNUDgK9RO075LiLlXfsEm2XiBABfJzRRsltH9GA7BCcAeE5bOy40UbLdSPmzHYLNE5wA4Cl1dax2nMIduNcE2+OOEwB8Se045buKlBf2CbbHxAkAHqurXaGJwt2tjugBWyU4AcC9tnb81HpQOPeaYACCEwDE32rHvdVEyY4i5Us7BNvnjhMAeKuJcVhGyjv2CoZh4gQAEedCE4VzrwkGJjgBMG/tW00/zn0ZKN5epHxjm2A4ghMA81VXh95qYgTOIuVzGwXDEpwAmKf2rabf7D6FW0bEvk2C4SmHAGB+2trxP+08hWvuNS0i5WsbBcP7X3vwhbp6HxHv1/r/UQsKMB5taPLnNmNwKDRBOeYxcaqrRffP7v+x+aH5/aN/3vebHbcRcX+Bs3mg7v4PvevuX9+44AkwgLZ2vPmz+J3lp3AXkbIWPSjIdIJT+8NwpwtH91OjTYSiPt0HrPu/rrtQ5dMlgL55q4nxuF39DpPyZ3sG5RhvcGqnSIsuHO1M8NPD+1B1KVAB9KCtHdegxxh88DMfyjOe4PQQlBYzf2/jqgtS7V/+YAX4NqGJ8TiKlA/tF5Sn3ODUljTsdkHp5wK+opJdPZpMXRrtAzzS1o7/YUkYgatIeWGjoExlBaeHsLTnDPqbLP8KUW2QUkQBzJPQxHjcre5n+/ATijV8cGov6+4JSxt124WocxMpYDYeasdLLgmCe79EyudWA8o1XHCqq/vJkmN427f8K0h5gwqYovYEw7XQxEicRMr7NgvKtt3g1E6X9rvA5A2NMtx9MY1yrA8YN7XjjMsyUt6xZ1C+7QSn9rjEvkajUVh2IepcYx8wSnV1LTQxEnfde00+tIQR2GxwaivED2deHz5mt49ClCN9QPnUjjMuHyPlU3sG47CZ4CQwTdHdoxDl8ipQnro6johPdoaROIuU92wWjEe/wUlgmgshCiiL2nHG5bY7oqflFkakn+DUthcda8ibpSZEna7+cicKGEL7od1/rD0j8sHPTBiftwWntrno0NEIOvd3oo5ddAW2wltNjM9BpHxs32B8Xh+c2mMRx35Y8Yzlo0mUowhA/9oP7278HGJELiLlXRsG47R+cGo/3Tt2j4k1XHQByn0ooB/eamJ8mqPt732YCOO1XnCqq+ZY3m/2m1e6vw/lKB/wNnV16QM8RuYnT3vAuL0sOLUXb5tfeN/Zb3py1U2hvF8BrMdbTYzPUaR8aN9g3L4dnEyZ2Kz7avNDUyjgm+pqPyJ+t1CMyFWkvLBhMH7PB6f2LtOp8+NskSkU8DxvNTE+d917TT4YhAl4OjhpzGNY7kIBf9d+mPenVWFkflGMBNPx9+DUthQdOztOQS66AOVCLcyVt5oYp5NIed/ewXQ8BCdH8yjbbffY8rkqV5gRteOMU/OW4cLPK5iWNjjV1W4XmnyaR+kc44O5EJoYp7suNF3bP5iW//nv//vwPiL+z74yQmddmYRjfDBFascZp49KjmCa7idOmooYM218MDVCE+N0ESnv2juYpsd3nBbdezqO6zFWt125yalz5TBiPsxjnG676nE/f2CivmzV2+nC0zsbzojddQHq2A8wGJn2zu2/bRsj9MG9Jpi2f77j5DIu03K2auNTJAHlUzvOeB1Eysf2D6btuQdwv++ay362/0zEWTeB8mkglKiumqKia6GJEbqKlBc2Dqbv6eB0z+Vcpueqm0Bp4oNSOOnAeDVHw987Fg7z8K+vfpcp761qNWE6foyI/0RdXXaFKMDwhCbGaldogvn4+sTpngdymS4TKBiSkw2M10mkvG//YD5eFpzCpV0m77YLUN6Cgm2pq8OI+M16M0LLSHnHxsG8vDw4hXPozIIABdvgrSbG6657r0lbK8zMesEp/gpP591dEZgqAQo2pb1f+B/ry0j9Eimf2zyYn/WD0z3n0pmH2+4x3VMXgKEHjn0zbmddcRYwQ68PTrH6Adhcivzd3zjMwF0XoI4FKHil9sTCjdDESC0jYuFnAMzX24JT/HVO/dgPQmZCgILXcEeW8fvgEXWYt7cHp3D0glkSoGAdddXcCfnZmjFSB5Hysc2DeesnOMXqh+L7rjTCp4nMzVlXJKFhCZ7iTizjdhEp79pDoL/gFI5iMHsCFHzJXVjG7barHneyAOg5ON3z6SLzJkBBeKuJSfgpUr60lUBsLDiFF+FhdbyjvQPlhy7z4+4r43cUKR/aR+De5oJT+LQROlfdBEqAYh6EJsbvKlJe2Efgsc0Gp/ADFB4RoJg+d10Zv6Y19b17TcCXNh+c4q/wdOoHKaxcdUf4zi0HkyI0MQ2/+PMZeMq/trIq7YNxi+7VbZi7HyPi31FXN91xVpiKY6GJkTsRmoDnbGfidK/9NPJY4x78zW13hO/UsjBaddX82f7JBjJiy0h5xwYCz9lucLrnByw8RYBinBQBMX53q5Mx7QkZgCcNE5zCD1r4itvuTuCxy8kUr652V0dPYdw++tAK+JbhglOsfuA2957ONe7Bk+66o60CFGXSmso0nEXK7psC3zRscIq/fvA24endsF8IFEuAojx19T4iroUmRq6Z8O/4sxV4ieGDU6iwhRe6D1CnkfKNRWMw/sxmOj641wS81HbqyL+l/aSnObZ3YefgWc0n+79FxP9FXZ12n/jDEM6FJibgQGgC1lHGxOmx5hdCdeXwUmddE58JFNvhz2im4SJS3rWXwDrKC06hcQ9eQYBi8+rqsJt6wpg1x57fu9cErKvM4BR/VdyeungMa7nqAtSlZaNXPtBiOn7yZyTwGuUGp1B1C28gQNGf9umI/1hRJuAoUj60kcBrlB2cQnsTvJEAxdv4AIvpWEbKO/YTeK3yg1P8FZ6aFqcfC/hqYIyuuhpzL+Pzcu2fvdfe2WMC7rr3mtwDBV5tHMHpnjYneKvbbgIlQPF1pv1Myy+R8rk9Bd6ijHecXirlvdW7C8BrvVtd8K+rm+6yPzznVGhiIk6EJqAP45o43Wt/4Tt25h7ezASKfzLdZzqWqwf2VY8DPRhncAoXlqFnd92HEcd+wZg5teNMx10Xmq7tKdCH8QanWP2Af9+VRjhOAv0QoOZMaGJaPpqmA30ad3AKjXuwIQLU3JjiMy0XkfKuPQX6NP7gdM+ZfNiEu+6DiUM1vhMmNDEtt131uA99gF5NJzjF6od/8xr4bwV8JTBFZwLUBKkdZ3o+uNcEbMK46si/JeXD1ZlmYBOaie7/raa77f1CpkFoYkqOhCZgU6Y1cbrn2Alsw1l3B8ovKWPliDPTchUpL+wpsCnTmjjda3+RW3TvNwCb0fzC/WfU1WXUlV9WxqaujoUmJqS5j6kMAtioaU6c7jm7D9t01d2BurTqhVM7zvT85M8eYNOmHZzuOY4C2yRAlayumk/l/z33ZWBSTiLlfVsKbNo8glP8dSzlUwFfCczFsrsD5QHKUrj/yfQsI+Ud+wpsw3yCUzieAnbyFSUAABO8SURBVAO57SZQAtSQ2qPLN0ITE3LXvdfkiQRgK+YVnGL1y8Oie9DTLw+wXQLUUNz3ZJo++vME2Kb5Baf467hKE57eFfDVwNzcro7wRZx62X9LmubDiB9n8b0yF2eR8p7dBrZpnsEpfAILBbjrAtSxALVBynGYnuXqyRF/bgBbNt/gFH+FJ2+ZwLAEqE2pq8OI+G2a3xwz9sHD28AQ5h2c7vlEFkogQPVJGQ7TdBApH9tbYAiC0z2/ZEBJzroiCW1Zr9He4/xzfF84fNVFpLxriYChCE6PtQ9Dnmrcg2IIUOvyVhPTdNtVj5tGA4MRnL7klw4okQD1Eu29zWuNoUzQT5HypY0FhiQ4PUXjHpTqrKsx9wvUl/y5xXQdRcqH9hcYmuD0nPaXkObY3s9lfoEwa1fdBEqAuqfkhmm6ipQX9hYogeD0LX4ZgZIJUOHPKSbrrrvX5IguUATB6SXqaj8ifi//C4XZmm+A0gjKdP0SKZ/bX6AUgtNLtb+cHCuNgKLddgHqdBbbJDQxXSeR8r79BUoiOK1D4x6MxfQDlD+PmK5lpLxjf4HS/MuOrCHl69V56+YPdaBk71aTmLq66aYy01JX74UmJqq51zS9/80Ck2Di9Bpt415z7vrH8X3xMEu3XUvm8egf0FQ7zrR9nM1RW2B0BKe30GQFY3PX3VUcb4Cqq2uhiYk6i5RNm4BiCU5vVVfNo3y/jfubgNkZZ4DyYQ3TddtVj497IgxMmuDUB81WMFb3Aeq0+Ldi6qr5Oj8V8JXAJnzo7hEDFEtw6ouGKxi7s66Jr7wA5cMZpu0gUj62x0DpBKc+teHp1P0DGLWyAlRdLSLiPwV8JbAJV5HywsoCYyA49U3jFUzF8AHKJJtpa47KvnevCRgLwWlTXOKGqbjoSiQut/r9tB/C3AhNTNhPW//fFcAbCE6b5DI3TMlVN4Ha/C96JtdM31GkfGifgTERnDbNpW6Yms0HqLq69MA2E7aMlHdsMDA2gtM2tJe7zx25gUm56mrMT3v9phzzZdruuveayq7/B3iC4LQt7SXvJjy9m8c3DLNx202g3h6g6mo/In73tw4T9kukfG6DgTESnLbJvQWYsrcFKMd6mb6zSHnPPgNjJThtWxuejh3FgclaP0C1E+k//S3BhC0jYqF6HBgzwWkoGvdg6u66D0mOv/rLoreamL67LjRd22tgzASnITmaA3PwfIByfJd5OIiUj+01MHaC09DqanfVzOXTZpi6vwcooYl5uIiUd+01MAWCUwkc1YE5ues+LPneXUcm7rarHnevCZgEwakUPn0GYFo+uNcETMm/7GYh2k/kFqtjDQAwbkdCEzA1Jk4lqqtTR3gAGKmrSHlh84CpMXEqUftA4Me5LwMAo9Pc4VMGAUyS4FSq9vHMj90PIQAYgz1lEMBUOapXOo17AIzDSaS8b6+AqRKcxqCu3kfEucY9AAq1jJR3bA4wZY7qjUHKN13j3tXclwKA4rjXBMyCidPYaNwDoCwfu3u5AJNm4jQ2bePewdyXAYAinAlNwFwITmOU8rG6cgAGtowIZRDAbDiqN2Ya9wAYzodI+dr6A3Nh4jRm7Q+sRfepHwBsy4HQBMyNidMU1NX33eRJXTkAm3YRKWvRA2ZHcJoSjXsAbFZTPf4+Uv5snYG5cVRvStrGvaO5LwMAG7MrNAFzJThNTcqHGvcA2ICjSPnSwgJz5ajeVNVVUxpxrnEPgB5cRcoLCwnMmYnTVLWfCjY/5G7nvhQAvElzr2nPEgJzJzhNWVsVu6OuHIA32IuUbywgMHeC09S1l3ibydPZ3JcCgLWdRMrnlg3AHad5qavjiPg092UA4EWWqw/etOgBrAhOc1NXzTn1P+a+DAB81V0Xmq4tE0DLUb25Sbl5JPeX7ociADxlX2gC+DsTp7mqq6Y04lJdOQBfuIiUdy0KwN+ZOM1V+0nie417ADxyq3oc4GmC05w9NO5dzH0pAFjZVQYB8DRH9WjVVXP36VerATBbB5Hyse0HeJrgxAONewBzdRUpL+w+wPMc1eNB27j3UeMewKzcrY7oAfBVJk78k8Y9gDn5KVK+tOMAX2fixD+1jXs7GvcAJu9EaAJ4GRMnnldX30fEeUT8aJUAJmcZKe/YVoCXMXHieU0lbXtZ+MwqAUyKe00AaxKc+LaU91Y1tQBMxV6kfGM3AV5OcOJl2rc9NO4BjN9ZpHxuHwHWIzjxcm1d+UJ4AhitpvRn3/YBrE9wYj1t495C4x7A6Nx1R/Q+2zqA9QlOrE94Ahijw+7PbwBeQR05b1NXzfG9X60iQNEuImUtegBvYOLE27SNe0dWEaBYt6sjegC8iYkT/air5ofyH1YToDg/RcqXtgXgbUyc6EfbuPdB4x5AUY6EJoB+mDjRr7raiYjmfZB3VhZgUFeR8sIWAPTDxIl+tY1NOxr3AAbVTP+VQQD0SHCif+0bIYvV6/QADMF7TQA9c1SPzaqr44j4ZJUBtuYkUt633AD9EpzYPI17ANuyjJR3rDZA/xzVY/Paxr2fNO4BbJR7TQAbJDixHW0d7kJ4AtiY/Uj5xvICbIbgxPa0jXvvNe4B9O6sm+4DsCGCE9v10Lh3YeUBenG7mjYBsFHKIRhOXTWfjv5qBwDe5EM30Qdgg0ycGE7KTdveRzsA8GoHQhPAdpg4Mby6alqgmunTd3YD4MUuImUtegBbYuLE8FI+17gHsJbmz8s9SwawPYITZWiPmuxo3AN4kd2ubAeALRGcKEf7/kgzebqyKwDPOurexgNgi9xxokwa9wCesoyUd6wMwPaZOFGmtnHvwO4A/OVudUQPgEEITpQr5eOurlxpBEBTBtEeaQZgAI7qUb66ao6lXKorB2bsJFLe9zcAwHBMnChf27i30LgHzFTzZ9+hzQcYlokT41FX33eTpx/sGjATd6sPjtoPkAAYkODE+GjcA+bjY6R8ar8BhueoHuPTNu4d2Tlg4i6EJoByCE6MU8qHXeMewBTdrlr0ACiGo3qMm8Y9YJo+uNcEUBYTJ8btoXHv1k4CE3EkNAGUx8SJadC4B0zDVaS8sJcA5TFxYhpS/txNns7sKDBSTfX4rs0DKJOJE9NTV8cR8cnOAiPzU6R8adMAymTixPSkvK9xDxiZE6EJoGwmTkxXXTVH98417gGFW0bKOzYJoGwmTkxX++mtxj2gZO41AYyE4MS0tZW+O6tPdAHKsxcp39gXgPIJTkzfQ+Pehd0GCnIWKZ/bEIBxcMeJeamr04j41a4DA1uuPtBpP9gBYAQEJ+anrvYi4g87DwzoQ3eUGICRcFSP+Um5mTr90l3KBti2A6EJYHxMnJivumpKIy7VlQNbdBEpa9EDGCETJ+ar/cT3vcY9YEtuVy16AIyS4MS8PTTuXc19KYCN21MGATBejurBPY17wOYcRcqH1hdgvAQneKyu9iPid2sC9OgqUl5YUIBxc1QPHkv5OCI+atwDenLnXhPANJg4wVM07gH9+CVSPreWAONn4gRPaRv3djTuAW9wIjQBTIeJE3xNXX3fTZ5+sE7AGpaR8o4FA5gOEyf4mqY6uP3l58w6AS/kXhPABAlO8BIp763qhAG+bb877gvAhDiqB+uoqyZA/WHNgGecdR+0ADAxJk6wjpSbR3I/qCsHnnC7mjYBMEmCE6yrPYKz0LgHfGF3dS8SgEkSnOA1hCfg7w7cawKYNsEJXqv9ZHmhcQ9m7ypSPp77IgBMnXII6ENdNb80fbKWMDvNfcf3jugBTJ+JE/Qh5eZC+EdrCbPjXhPATAhO0Je2ce8njXswG0eR8qXtBpgHR/Wgb3W1ExHnEfHO2sJkLSPlHdsLMB8mTtC3tllrR+MeTNbd6ogeALMiOMEmPDTuXVhfmJy9SPnGtgLMi6N6sGl11dx9+tU6wyScdGUwAMyMiRNsWsp7GvdgEprjt4e2EmCeBCfYhrZx7xeNezBad90RPdXjADMlOMG2pHze3XsSnmB8DrviFwBmyh0n2La6+j4imrdffrD2MAoXkbIWPYCZM3GCbXto3Luy9lC829URPQBmz8QJhqRxD0r3wRE9AMLECQbWNu4d2AYo0pHQBMA9EycoQV01Aeo4Ir6zH1CEq0h5YSsAuGfiBCVo68o17kEZmv8dKoMA4G8EJyhFeyRop3tkExiO95oA+AfBCUqS8k03eRKeYBgn3ZtrAPA37jhBqTTuwbYtI+Udqw7AU0ycoFRt496R/YGtcK8JgK8SnKBkKR9GxEd7BBu33x2VBYAnOaoHY1BXzfGhS3XlsBFn3YQXAJ5l4gRj0DbuKY2A/i1X0yYA+AYTJxiTuvq+mzz9YN+gFx+6DyYA4KsEJxgjjXvQh4NI+dhKAvASghOMVV01v/B9sn/wKheRshY9AF7MHScYq5T3Ne7BqzTV48ogAFiL4ARjlnJzZO+n7hdB4GV2I+XP1gqAdQhOMHYpX3aNe7f2Er7pqPvfDACsxR0nmAqNe/AtV5HywioB8BomTjAV7dGjxeoxT+BL7jUB8CYmTjBF6srhS79EyudWBYDXMnGCKUp5T+Me/OVEaALgrUycYMrqqnmnppk+fWefmallpLxj8wF4KxMnmLL2U/aFunJmyr0mAHojOMHUpXwdEe9Xn7zDvOx3f/8DwJsJTjAHD417F/abmbjoHogGgF644wRzo3GP6Wseg97pPjAAgF6YOMHctI17B/adCdsVmgDom+AEc5TycVdXrjSCqTlwrwmATXBUD+asrpqa5kt15UzEVaS8sJkAbIKJE8xZ+8n8jsY9JuBudUQPADZEcIK5S/mma9y7mvtSMGruNQGwUY7qAQ807jFOR5Hyob0DYJMEJ+Dv6qr5BfQ3q8JILCPlHZsFwKY5qgf8XfvJ/Uerwgi41wTA1ghOwD+l3BzZ+6CunMLtdXf0AGDjBCfgaW3j3kLjHoU6i5TPbQ4A2yI4Ac8TnihT8/fjvr0BYJuUQwAvo3GPMtytwnwb6gFga0ycgJdJeS8iTqwWAzsUmgAYgokTsJ66agLUH1aNAVxEylr0ABiEiROwnrZx7yeNe2zZ7apFDwAGIjgB60v5siuNuLV6bElTPf7ZYgMwFMEJeJ32nsmOxj224KgL6wAwGHecgLepq+8j4ljjHhtyFSkvLC4AQxOcgH6oK6d/zT26947oAVACR/WAfrR15R+tJj1yrwmAYghOQH/axr1fNO7Rg5NI+dxCAlAKR/WA/tVVUxrRXOb/zuryCstIecfCAVASEyegf23j3nuNe7xCM630yC0AxRGcgM1o76Y0bWgXVpg17EfKNxYMgNI4qgdsnsY9XuasKxkBgOKYOAGbp3GPb7tdTZsAoFCCE7AdbePeR417PGNX9TgAJROcgO1pw9NCeOILB12hCAAUyx0nYPvqqmnca97o+cHqz95FpKxFD4DimTgB29e2pjWTpyurP2vN5FEZBACjYOIEDEvj3pz9FClfzn0RABgHEydgWG3j3oFdmJ0joQmAMTFxAspQV02A+sNuzMJVpLyY+yIAMC4mTkAZ2sa9Dxr3Js+9JgBGSXACytFWUjeTiKVdmay9rhwEAEZFcALKIjxN2UmkfD73RQBgnNxxAsqlcW9KlqtAnPLnuS8EAONk4gSUq23cO7JDo3fXHdETmgAYLcEJKFvKhxHx0S6N2n53BBMARstRPWAc6qq599Tcj/nOjo3KRaS8O/dFAGD8TJyAcWgfS23C060dG41b1eMATIWJEzAudfV9RDQh6gc7V7wPjugBMBUmTsC4tAUDzeTpzM4V7UhoAmBKTJyA8aqr44j4ZAeLcxUpL+a+CABMi4kTMF4p72vcK05TPa4MAoDJEZyAcUu5eST3l+4Xdoa3670mAKZIcALGL+Xz7t6T8DSsk679EAAmxx0nYDo07g1pGSnvzPfbB2DqTJyA6Xho3Luwq1vlXhMAk2fiBExTXTV3n361u1vxS3dcEgAmy8QJmKaU9zTubcWZ0ATAHAhOwHS1jXsflUZszDIi9if6vQHA3ziqB0xfXe10pRHf2e1efYiUryf0/QDAs0ycgOlrf7nf6SYk9ONAaAJgTkycgPlo68qb+zg/2vU3uYiUtegBMCuCEzA/Gvfe4nY1vWur3wFgNhzVA+anbdw7sPOvsic0ATBHghMwTykfqytf21GkfDmyrxkAeuGoHjBvGvde6ipSXozjSwWA/pk4AfPWNsMtNO59VfMOljIIAGZNcAIQnr7FvSYAZs9RPYDHNO596SRS3i/rSwKA7ROcAL5UV4cR8Zt1iWWkvFPA1wEAg3NUD+BLKR9q3Fvda9or4OsAgCIITgBPSbk5svehCxBztN/d/QKA2QvBCeArHkojbme2TB+74AgAdNxxAviWuvq+e+vphxmsldAEAE8wcQL4lraKu5k8nU18rYQmAHiGiRPAOurqOCI+TWzN2gduU74s4GsBgCKZOAGso33T6OOESiOaR393hCYA+DoTJ4DXqKv3EXE+8ntPHrcFgBcSnADeYpyP5d6u3mgyZQKAFxOcAN6qnT41pQo/Fr6WzfHC4+6BXwBgDYITQF/qqmneOyw0QJ11j9p+LuBrAYDREZwA+lZOgGonTM00LOWbgb8WABg1wQlgU9ojfPurqu+Id1tc54tVcYU3mQCgN4ITwDbU1c6qkKF9SLfvJr5msnTZtfydO44HAP0TnAC2ra6+X72d1Iao991fzb/+7gVfSfPu0ucuKDXH764j5Wt7CACbJTgBlKY94vf+0Vd1bYoEAAOKiP8P1coBuBTmMJUAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);
