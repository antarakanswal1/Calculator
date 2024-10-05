var ext="",n1,n2,rs,op;
        function num1()
        {
            document.getElementById("usernum").value=ext+="1";
        }

        function num2()
        {
            document.getElementById("usernum").value=ext+="2";
        }

        function num3()
        {
            document.getElementById("usernum").value=ext+="3";
        }

        function num4()
        {
            document.getElementById("usernum").value=ext+="4";
        }

        function num5()
        {
            document.getElementById("usernum").value=ext+="5";
        }

        function num6()
        {
            document.getElementById("usernum").value=ext+="6";
        }

        function num7()
        {
            document.getElementById("usernum").value=ext+="7";
        }

        function num8()
        {
            document.getElementById("usernum").value=ext+="8";
        }

        function num9()
        {
            document.getElementById("usernum").value=ext+="9";
        }

        function num0()
        {
            document.getElementById("usernum").value=ext+="0";
        }

        function dot()
        {
            document.getElementById("usernum").value=ext+=".";
        }

        function plus(){
        n1=document.getElementById("usernum").value;
        document.getElementById("usernum").value="";
        ext="";
        op="+";
        }

        function minus(){
        n1=document.getElementById("usernum").value;
        document.getElementById("usernum").value="";
        ext="";
        op="-";
        }

        function multi(){
        n1=document.getElementById("usernum").value;
        document.getElementById("usernum").value="";
        ext="";
        op="*";
        }

        function divide(){
        n1=document.getElementById("usernum").value;
        document.getElementById("usernum").value="";
        ext="";
        op="/";
        }

        function dot(){
        n1=document.getElementById("usernum").value;
        document.getElementById("usernum").value="";
        ext="";
        op=".";
        }

        function equal()
        {
            if(op=="+")
            {
                n2=document.getElementById("usernum").value;
                rs=parseInt(n1)+parseInt(n2);
                document.getElementById("usernum").value=rs;
                ext="";
            }

            else if(op=="-")
            {
                n2=document.getElementById("usernum").value;
                rs=parseInt(n1)-parseInt(n2);
                document.getElementById("usernum").value=rs;
                ext="";
            }

            else if(op=="*")
            {
                n2=document.getElementById("usernum").value;
                rs=parseInt(n1)*parseInt(n2);
                document.getElementById("usernum").value=rs;
                ext="";
            }

            else if(op=="/")
            {
                n2=document.getElementById("usernum").value;
                rs=parseInt(n1)/parseInt(n2);
                document.getElementById("usernum").value=rs;
                ext="";
            }
            else if(op==".")
            {
                n2=document.getElementById("usernum").value;
                rs=parseInt(n1).parseInt(n2);
                document.getElementById("usernum").value=rs;
                ext="";
            }
            document.getElementById("res").innerHTML=(n1+ " "+ op+ " "+n2);
        }

