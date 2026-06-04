import React from 'react'

function PromisePolyFill() {

    function MyPromise(ExecutorFn) {
        let onResolver;
        let onReject;
        let isCalled = false;
        let fullFilled = false;
        let isRejected = false;
        let value;
      
        function resolve(data) {
          value = data;
          fullFilled = true
          if (typeof onResolver === 'function' && !isCalled) {
            onResolver(data);
            isCalled = true;
          }
        }
      
        function reject(err) {
            value = err
            isRejected = true
            if(typeof onReject === 'function' && !isCalled) {
                onReject(err)
                isCalled = true
            }
        }
      
        this.then = function (callBackFn) {
          onResolver = callBackFn;
          if (!isCalled && fullFilled) {
            onResolver(value);
            isCalled = true;
          }
          return this;
        };
      
        this.catch = function (callBackFn) {
            onReject = callBackFn
            if(!isCalled && isRejected) {
                onReject(value)
                isCalled = true
            }
            return this;
        };
      
        ExecutorFn(resolve, reject);
      }
      
      const promise = new MyPromise((res, rej) => {
        setTimeout(() => {
          rej(20);
        }, 1000);
      });
      //  console.log(promise)
      promise
        .then(data => console.log('sucess ' + data))
        .catch((data)=>console.warn("err " + data));
      


  return (
    <div>PromisePolyFill</div>
  )
}

export default PromisePolyFill