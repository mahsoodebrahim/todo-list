(()=>{"use strict";const t=new class{constructor(t){this.projectTitle=t,this.todoItems=[],this.id=Math.floor(100*Math.random())}addTodoItem(t){this.todoItems.push(t)}removeTodoItem(t){this.todoItems=this.todoItems.filter((e=>e.id!==t))}}("My First Project"),e=new class{constructor(t,e,o,d,i){this.title=t,this.description=e,this.dueDate=o,this.priority=d,this.notes=i,this.id=Math.floor(100*Math.random())}}("title","description","due date","high priority","notes");t.addTodoItem(e);const o=document.createElement("div"),d=document.createElement("ul");o.appendChild(d),d.setAttribute("id",t.id);const i=document.createElement("li");d.appendChild(i),t.todoItems.forEach((t=>{const e=document.createElement("ul"),o=document.createElement("li");o.append(t.title),e.appendChild(o);const d=document.createElement("li");d.append(t.description),e.appendChild(d),i.appendChild(e)})),document.querySelector(".grid").appendChild(o)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBR0EsTUFBTUEsRUFBaUIsSUNIUixNQUNiQyxZQUFZQyxHQUNWQyxLQUFLRCxhQUFlQSxFQUNwQkMsS0FBS0MsVUFBWSxHQUNqQkQsS0FBS0UsR0FBS0MsS0FBS0MsTUFBc0IsSUFBaEJELEtBQUtFLFVBRzVCQyxZQUFZQyxHQUNWUCxLQUFLQyxVQUFVTyxLQUFLRCxHQUd0QkUsZUFBZUMsR0FDYlYsS0FBS0MsVUFBWUQsS0FBS0MsVUFBVVUsUUFDN0JKLEdBQWFBLEVBQVNMLEtBQU9RLE1EVkQsb0JBQzdCRSxFQUFPLElFSkUsTUFDYmQsWUFBWWUsRUFBT0MsRUFBYUMsRUFBU0MsRUFBVUMsR0FDakRqQixLQUFLYSxNQUFRQSxFQUNiYixLQUFLYyxZQUFjQSxFQUNuQmQsS0FBS2UsUUFBVUEsRUFDZmYsS0FBS2dCLFNBQVdBLEVBQ2hCaEIsS0FBS2lCLE1BQVFBLEVBQ2JqQixLQUFLRSxHQUFLQyxLQUFLQyxNQUFzQixJQUFoQkQsS0FBS0UsWUZGNUIsUUFDQSxjQUNBLFdBQ0EsZ0JBQ0EsU0FFRlIsRUFBZVMsWUFBWU0sR0FHM0IsTUFBTU0sRUFBYUMsU0FBU0MsY0FBYyxPQUNwQ0MsRUFBWUYsU0FBU0MsY0FBYyxNQUV6Q0YsRUFBV0ksWUFBWUQsR0FDdkJBLEVBQVVFLGFBQWEsS0FBTTFCLEVBQWVLLElBQzVDLE1BQU1zQixFQUFjTCxTQUFTQyxjQUFjLE1BQzNDQyxFQUFVQyxZQUFZRSxHQUd0QjNCLEVBQWVJLFVBQVV3QixTQUFTbEIsSUFDaEMsTUFBTW1CLEVBQUtQLFNBQVNDLGNBQWMsTUFFNUJQLEVBQVFNLFNBQVNDLGNBQWMsTUFDckNQLEVBQU1jLE9BQU9wQixFQUFTTSxPQUN0QmEsRUFBR0osWUFBWVQsR0FFZixNQUFNQyxFQUFjSyxTQUFTQyxjQUFjLE1BQzNDTixFQUFZYSxPQUFPcEIsRUFBU08sYUFDNUJZLEVBQUdKLFlBQVlSLEdBS2ZVLEVBQVlGLFlBQVlJLE1BR2JQLFNBQVNTLGNBQWMsU0FDL0JOLFlBQVlKLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2NsYXNzZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY2xhc3Nlcy9Ub2RvSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jbGFzc2VzL1Byb2plY3RcIjtcbmltcG9ydCBUb2RvSXRlbSBmcm9tIFwiLi9jbGFzc2VzL1RvZG9JdGVtXCI7XG5cbmNvbnN0IG15Rmlyc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJNeSBGaXJzdCBQcm9qZWN0XCIpO1xuY29uc3QgdGVzdCA9IG5ldyBUb2RvSXRlbShcbiAgXCJ0aXRsZVwiLFxuICBcImRlc2NyaXB0aW9uXCIsXG4gIFwiZHVlIGRhdGVcIixcbiAgXCJoaWdoIHByaW9yaXR5XCIsXG4gIFwibm90ZXNcIlxuKTtcbm15Rmlyc3RQcm9qZWN0LmFkZFRvZG9JdGVtKHRlc3QpO1xuXG4vLyBjcmVhdGUgdGhlIHByb2plY3QgdWxcbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgcHJvamVjdFVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuLy8gYWRkIHRoZSBpZCB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIHVsIHByb2VqY3RcbnByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFVsKTtcbnByb2plY3RVbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBteUZpcnN0UHJvamVjdC5pZCk7XG5jb25zdCBwcm9qZWN0VWxMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbnByb2plY3RVbC5hcHBlbmRDaGlsZChwcm9qZWN0VWxMaSk7XG5cbi8vIGFwcGVuZCBUb0RvIGl0ZW1zIHN0b3JlZCB3aXRoaW4gcHJvamVjdCB0byB1bFxubXlGaXJzdFByb2plY3QudG9kb0l0ZW1zLmZvckVhY2goKHRvZG9JdGVtKSA9PiB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0aXRsZS5hcHBlbmQodG9kb0l0ZW0udGl0bGUpO1xuICB1bC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZCh0b2RvSXRlbS5kZXNjcmlwdGlvbik7XG4gIHVsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgLy8gdWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpLmFwcGVuZCh0b2RvSXRlbS5kdWVEYXRlKSk7XG4gIC8vIHVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKS5hcHBlbmQodG9kb0l0ZW0ucHJpb3JpdHkpKTtcbiAgLy8gdWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpLmFwcGVuZCh0b2RvSXRlbS5ub3RlcykpO1xuXG4gIHByb2plY3RVbExpLmFwcGVuZENoaWxkKHVsKTtcbn0pO1xuXG5jb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkXCIpO1xuZ3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0VGl0bGUpIHtcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICB0aGlzLnRvZG9JdGVtcyA9IFtdO1xuICAgIHRoaXMuaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApOyAvLyBUT0RPOiB1cGRhdGUgdG8gdXNlIHV1aWRcbiAgfVxuXG4gIGFkZFRvZG9JdGVtKHRvZG9JdGVtKSB7XG4gICAgdGhpcy50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XG4gIH1cblxuICByZW1vdmVUb2RvSXRlbSh0b2RvSXRlbUlkKSB7XG4gICAgdGhpcy50b2RvSXRlbXMgPSB0aGlzLnRvZG9JdGVtcy5maWx0ZXIoXG4gICAgICAodG9kb0l0ZW0pID0+IHRvZG9JdGVtLmlkICE9PSB0b2RvSXRlbUlkXG4gICAgKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0l0ZW0ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIHRoaXMuaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApOyAvLyBUT0RPOiB1cGRhdGUgdG8gdXNlIHV1aWRcbiAgfVxuXG4gIC8vY2hhbmdlIHRpdGxlXG4gIC8vY2hhbmdlIGRlY3JpcHRpb24gbWV0aG9kXG4gIC8vLi4uLlxufVxuIl0sIm5hbWVzIjpbIm15Rmlyc3RQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJwcm9qZWN0VGl0bGUiLCJ0aGlzIiwidG9kb0l0ZW1zIiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhZGRUb2RvSXRlbSIsInRvZG9JdGVtIiwicHVzaCIsInJlbW92ZVRvZG9JdGVtIiwidG9kb0l0ZW1JZCIsImZpbHRlciIsInRlc3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5Iiwibm90ZXMiLCJwcm9qZWN0RGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicHJvamVjdFVsIiwiYXBwZW5kQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJwcm9qZWN0VWxMaSIsImZvckVhY2giLCJ1bCIsImFwcGVuZCIsInF1ZXJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9