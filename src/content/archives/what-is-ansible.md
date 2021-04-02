## What is Ansible?

Ansible is an open-source software provisioning, configuration management, and application deployment tool enabling Infrastructure as code. It handles configuration management, application deployment, cloud provisioning, ad-hoc task execution, network automation, and multi-node orchestration.


## What are the advantages of Ansible over other configuration management tools such as Chef or cfengine?

A big problem with other configuration management systems was that they relied on an agent to manage their systems, this creates a new problem of "managing the management" because the agents must be bootstrapped and kept updated which adds complexity. Ansible however is agentless. Ansible takes advantage of existing remote management systems like ssh and winrm to do it’s execution and not require managing another agent. While incoming ssh and winrm are never enabled by default in these operating systems, ansible is also a provisioning tool, which means it can provision systems with those two enabled. Rules can be set to ensure restarting these daemons if they crash, or restoring the state of the system in case ansible can’t reach them, further reducing the need of human intervention.

Another important advantage of ansible over chef is the “source of truth”. Ansible uses "playbooks" which are the set of instructions to be performed, that act as the source of truth. These playbooks can be stored in git and allow ansible to fetch them directly from the git server as required providing all the advantages of Infrastructure as Code.  With other configuration management tools such as Chef, you have to upload the “cookbooks” to one of the Chef Servers, and there is no straightforward way of making sure they stay consistent.

Another big advantage Ansible has over other Configuration Management systems is the ability to use dynamic inventory. With Chef, for example, you have to manually configure what system is being managed by Chef. With Ansible, you can poll data from an external source. This external source can be a system managed by Ansible itself, with ansible itself providing the data for when a new system is provisioned in the private or public cloud, making ansible self-reliant.


## Why use Ansible when I can just use bash & perl?

Ansible provides five major advantages to using bash & perl.

**1.** There is no agent. You have to manually go to every single machine and run the scripts. This is fine when there’s two racks to manage, not so fine when you have thousands of racks all over the world. Programming in a way to connect to all those racks not only requires serious effort on your part, you also don’t get to enjoy any of the effort in ensuring things don’t go wrong, all the error handling, and what not various open source devs have put over the years.

**2.** Ansible ensures best practices from sysadmins. You have to store your configs in version control, you have to write your configurations declaratively, among many others. While these may seem obvious, a couple years in the industry with all the stress it offers, leaves even the best of us in a “I don’t care” mentality.

**3.** Ansible playbooks are reusable. There are no side-effects with multiple runs if they fail. You can go to ansible galaxy, download a module from there to use it for your own playbook, or even copy an entire playbook, and be sure about the fact if it worked on my system, it will work in your system. With a bash, perl or python script you copy from the internet there is no guarantee it will work on your system without going through it because the person who wrote that script might have designed it with their environment in mind, which requires you to edit those parts to fit your own environment. This problem doesn’t exist with ansible, because ansible leaves these parts to be configured in other parts of the system and not within the playbook itself.

**4.** Every major vendor usually has an ansible module. This means you can use ansible in almost any environment. While these vendors do have with their own APIs and libraries, as newer shiny things come out older APIs get depreciated. Since ansible modules abstract away these gritty details from you, if the vendor in question decides to change from SOAP to REST, you can still use your current playbook without worrying about having to do a rewrite.

**5.** Ansible comes with the ultimate oh shit button. Paid support.


## How do I get ansible?

You can get Ansible as a control node on most major platforms except Windows. Windows can be managed by Ansible, but it cannot be a control node.

On Fedora: 
```sh
$ sudo dnf install ansible
```

On RHEL/CentOS:
```sh
$ sudo yum install ansible
```

On Ubuntu:
```sh
$ sudo apt update
$ sudo apt install software-properties-common
$ sudo apt-add-repository --yes --update ppa:ansible/ansible
$ sudo apt install ansible
```

On Gentoo:
```sh
$ merge -av app-admin/ansible
```

On FreeBSD:
```sh
$ sudo pkg install py36-ansible
```

Instructions to install on other targets can be found on https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html.

## How do I use ansible?

Running an ansible playbook is simple.
```sh
$ ansible -i inventory playbook.yml
```
`-i` is to give the inventory, or the hosts where this playbook would run. This file contains the hostname/ip of the machine.

An example inventory file:
```yml
[all:vars]
ansible_user=tph_admin
ansible_ssh_pass=hunter2
ansible_port=22

[tph_admin_panel_top_secret]
node4 ansible_host=11.29.242.134

[web:vars]
ansible_user=tph_admin_for_web
ansible_ssh_pass=btw_i_use_arch
ansible_port=22

[web]
node1 ansible_host=593.149.294.249
node2 ansible_host=10.11.232.111
node3 ansible_host=10.23.281.001

[control]
ansible ansible_host=0.1.2.3
```

To explain, `[all:vars]` are the default variables for all nodes in this inventory file. So if I were to connect to any of the nodes in this inventory, it will default the username, password, and port from all.

`[web:vars]` overrides the default variables for the web group of hosts. Whenever we run a playbook, over the web group, we will use the username, password, and port from this group.

`[web]` and `[tph_admin_panel_top_secret]` are just tags for the group of hosts under each respectively. Since `[web]` has `[web:vars]` for it it will use vars from that, for `[tph_admin_panel_top_secret]` as there’s a no corresponding `[tph_admin_panel_top_secret:vars]` it will use the vars from the `[all:vars]` by default.

`[control]` is optional. It tells ansible what node to use for getting all the settings from, and will pass the playbook to be executed from that node automatically. If you don’t specify it, it will just default to whatever node ansible is running from right now, which is exactly the machine you are working on right now.

Examples of ansible playbooks are in the section right below this section.
In your working directory, you can create a file named .ansible.cfg, and list this inventory there. By doing that, you don’t have to provide an inventory file each time.

```sh
$ cat .ansible.cfg
[defaults]
Inventory = /path/to/inventory
```

This simplifies your commands a little. Now you can do things such as:
```sh
$ ansible web --list-hosts
$ ansible web, ansible --lists-hosts
$ ansible ‘node*’ --list-hosts
$ ansible all --list-hosts
```
 
If you don’t set the inventory variable in .ansible.cfg file you can still do the same but you need to prepend the inventory.

```sh
$ ansible -i inventory all --list-hosts
```

From this point we assume you have already set up .ansible.cfg file but you don’t have to. Just prepend `-i` inventory if you haven’t.

Sometimes you just want to run a single module against all your hosts, such as maybe pinging all your machines to ensure those are alive. Writing a playbook for this is easy but also overkill. Instead, you can do:

```sh
$ ansible web -m ping
```

Remember, you don’t have to run a command over a group. You can also run it over a node.

```sh
$ ansible node1 -m ping
```

Ping is a module that comes built into ansible. We specify it will be a module using `-m`. It has built in error handling. All major unix commands are built into ansible as modules. You can find a list of all ansible modules using `$ ansible-doc -l`. Use grep to pinpoint modules. 

Sometimes modules might not exist for your command. Maybe you are using a custom thing. In that case you can run ad-hoc commands over ansible.

```sh
$ ansible node1 -m command -a “ping”
```
In this case command is a module and `-a` is followed by the command that will be run.

## Examples of Ansible Playbooks

Ansible playbooks are yaml files. They have their own syntax, however the syntax is so dead simple, you can figure it out after a couple hours, we will try to provide examples to make it easy to understand, but you are recommended to read ansible documentation on writing playbooks since writing the same content from that over here is unnecessary.

A playbook to install cockpit on your CentOS web server.

```yml
---
- name: Cockpit is installed
  hosts: web # can be a single node as well
  become: yes # become a superuser
  tasks:
  -   name: Cockpit is installed and is updated
    yum : 
      name: cockpit # name of package
      state: latest # make sure it’s updated if it’s not the latest release
   -   name: Cockpit enabled and running
     service: 
       name: cockpit
       enabled: true
       state: started
```

YAML is a pain to write and syntax errors can occur. However, ansible comes with a tool to ensure there’s no syntax error. Check your playbook with: 

```sh
$ ansible-playbook --syntax-check playbook.yml
```

In fact, that playbook is incorrect. Run that command to see where it’s incorrect!

Then you can run it using:
```sh
$ ansible-playbook playbook.yml
```

You can also use the previous command we listed in the previous section and do the same.

Note, since ansible is stateless we just tell ansible what to do. If the cockpit is already there it doesn’t care and just says ok. If it’s not there, it’ll install a cockpit. If it’s not the latest version, it will update it. Ansible playbooks are for most parts declarative, meaning you tell it what to do, and not how to do it. Sometimes there is no module and you have to tell it exactly what to do using commands.
A playbook to ensure certain users are present in a node.

```yml
---
- name: Ensure Users are present
  hosts: web
  become: true

  tasks: 
   - name: Ensure three users are present
     user:
       name: “{{ whatver_name_you_want_this_to_be }}”
       state: present
       loop: 
         dev_user
         qa_user
         prod_user
```

Create a VM on vsphere ESXi from a template.
```yml
---
- name: Create a VM from a template
  hosts: localhost
  connection: local
  gather_facts: no
  tasks:
  - name: Clone the template
    vmware_guest:
      hostname: 192.0.2.44
      username: administrator@vsphere.local
      password: vmware
      validate_certs: False
      name: testvm_2
      template: template_el7
      datacenter: DC1
      folder: /DC1/vm
      state: poweredon
      wait_for_ip_address: yes
```


These are very simple playbooks. However you can go beyond and do wonders. At my workplace we have a playbook that checks the make of storage nodes we sell, then determines what version of esxi we support on it, and starts the work to set up initial storage volume pools. It then starts migrating data from customer’s old pools to our own pools. If for some reason it fails, and it is not the customer’s fault (invalid input for example), it writes an email with all the logs and sends it to the customer’s representative in our company, who upon getting the email, calls the customer and starts troubleshooting things with them.
We also have a playbook that we use for provisioning virtual storage clusters on KVM, ESXi, Xen and HyperV, runs stress tests against them to ensure the software is working properly, and then goes ahead to use PXE Boot on 15 racks of physical hardware located all over the country to install the new software, including two racks stored in high temperature and low temperature conditions and run the same set of stress tests to ensure it works on Physical hardware as well. 

There’s a lot more you can do with it, so go on and experiment with things you do daily and see what you can automate!

## When should I not use ansible? 

When it’s trivial to do something with a couple lines of bash or perl. Say opening a zip file, exporting all the test data from it to make a graph. This might seem like a stupid thing to point out, but people do it all the time.

## Resources

https://docs.ansible.com/

## Ansible AWX & Tower

Ansible comes with a web dashboard, and it is highly recommended you install it. It’s mindlessly easy to install, and makes using ansible a breeze. It exposes a REST API, that you can use to automate ansible even further. You shouldn’t be using Ansible without it! 

There are two dashboards. Ansible AWX and Ansible Tower. Ansible AWX is the upstream version of the dashboard. Tower is the paid version, comes with support, and guarantees back compatibility to a specific release. 

After you have installed Ansible, to install AWX you need to install some dependencies. Ensure you have git, docker, gnu make and docker-compose installed. You also need to install docker python module through pip. 

To set up awx:

```sh
$ git clone https://github.com/ansible/awx
$ cd awx/installer/
$ ansible-playbook -i inventory install.yml
```

You can edit the inventory file to change different variables such as username and password. It’s also possible to do them post install.

With the default configuration options, assuming you didn’t edit the inventory file, you can access your dashboard at http://localhost/

The username is admin, and the password is password. Please change them if you haven't already pre-install. 

For tower, contact the paid support you are paying for. 

We will not be covering awx in detail in this spotlight as it's complex enough to have it's own spotlight. However, don't let that stop you from asking questions about it!