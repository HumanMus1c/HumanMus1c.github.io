function dockFunction() {
	document.querySelectorAll('.dock li').forEach(li => {
/* 用querySelectorAll方法获取所有dock标签里的的li */
	}
	
	li.addEventListener('click', e => {
	  e.currentTarget.classList.add('loading')
		}
	)
	
		li.addEventListener('mousemove', e => {
			/* 通过循环为每个li加入mouse move事件监听器 */
			let item = e.target
			/* 定义一个变量item，赋值为e.target*/
			
			let itemRect = item.getBoundingClientRect()
			/* 定义变量itemRect赋值为item.getBoundingRect() */
			
			let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width
			/* 计算光标在图标上的位置定义为变量offset，赋值为e.clientX减去itemRect.left ，由于可能是负值，所以外面要套上Math.abs*/
			/* 因为当光标在图标上左右移动时，offset的值在当光标往左移会趋近于0，往右移会趋近于1， */
			
			
			/* 计算图标放大比率 */
			/* 定义两个变量prev和next */
			/* 通过ElementSibiling方法获取光标所在图标的li之前一个以及之后一个li元素 */
			/* 当光标在第一个图标上(最左边的图标)的时候，prev就会是null，因为最左边的图标左边没有图标也没有元素，所以值为空 */
			let prev = item.previousElementSibling || null
			let next = item.nextElementSibling || null
			
			/* 再定义一个常量scale */
			let scale = 0.6 /* 放大倍数*/
			
			resetScale()	/* 重置放大倍率 */
			
			/* 通过setProperty方法将放大比率设定为CSS中的值 */
			/* offset-1是因为设定的是左边的元素，所以值会与右边的元素相反 */
			if (prev) {	/* 左边图标缩放 */
				prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
			}
			
			item.style.setProperty('--scale', 1 + scale)	/* 当前图标缩放 */
			
			
			if (next) {	/* 右边的图标缩放 */
				next.style.setProperty('--scale', 1 + scale * offset)
			}
		})
	})	
			
		/* 当光标移出图标所在li区域时，需要重置放大比率scale为1 */
		/*定义一个用于重置scale放大比率的函数方法，方法名为resetScale */
			document.querySelector('.dock').addEventListener('mouseleave', e => {
				resetScale()
			})
			
			function resetScale() {
				document.querySelectorAll('.dock li').forEach(li => {
				li.style.setProperty('--scale', 1)
				})
				
			}
			
			

